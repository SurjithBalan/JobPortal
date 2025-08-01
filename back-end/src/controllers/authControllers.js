const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../repositorties/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
    const { id_token } = req.body;

    if (!id_token) {
        return res.status(400).json({ message: 'ID token is missing.' });
    }

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        const { sub: googleId, email, name, picture: imageUrl } = payload;
         console.log('Google ID:', googleId);
        let user = await User.findByGoogleId(googleId);

        if (!user) {
            // User does not exist, create a new one
            user = await User.createUser(googleId, email, name, imageUrl);
        }

        // Generate JWT
        const token = jwt.sign({ user: { id: user.id, email: user.email } }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Generate CSRF token (handled by csurf middleware)
        const csrfToken = req.csrfToken();

        // Set JWT and CSRF token in HTTP-only cookies
        res.cookie('jwtToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure in production
            sameSite: 'Lax', // Or 'Strict' for more security
            maxAge: 3600000 // 1 hour
        });
        res.cookie('XSRF-TOKEN', csrfToken, {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax',
            maxAge: 3600000 // 1 hour
        });


        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, email: user.email, name: user.name, imageUrl: user.imageUrl }
        });

    } catch (error) {
        console.error('Google login error:', error);
        res.status(500).json({ message: 'Google authentication failed', error: error.message });
    }
};

const getCsrfToken = (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
};

const protectedRoute = (req, res) => {
    res.json({ message: `Welcome, ${req.user.email}! This is a protected route.`, user: req.user });
};

module.exports = { googleLogin, getCsrfToken, protectedRoute };