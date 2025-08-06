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
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture: imageUrl } = payload;

    console.log('Google ID:', googleId);

    // Ensure googleId is a string
    let user = await User.findByGoogleId(String(googleId));

    if (!user) {
      // Note: your createUser function must accept parameters in this order
      await User.createUser(email, name, String(googleId));
      user = await User.findByGoogleId(String(googleId)); // retrieve newly created user
    }

    // Generate JWT
    const token = jwt.sign(
      { user: { id: user.id, email: user.email } },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    // Generate CSRF token
    const csrfToken = req.csrfToken();

    // Set JWT and CSRF token in HTTP-only cookies
    res.cookie('jwtToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 3600000, // 1 hour
    });

    res.cookie('XSRF-TOKEN', csrfToken, {
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        imageUrl: user.imageUrl || imageUrl,
      },
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({
      message: 'Google authentication failed',
      error: error.message,
    });
  }
};

const getCsrfToken = (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
};

const protectedRoute = (req, res) => {
  res.json({
    message: `Welcome, ${req.user.email}! This is a protected route.`,
    user: req.user,
  });
};

module.exports = {
  googleLogin,
  getCsrfToken,
  protectedRoute,
};
