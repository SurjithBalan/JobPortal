const jwt = require('jsonwebtoken');
const csrf = require('csurf'); // For CSRF protection

const csrfProtection = csrf({ cookie: true });

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwtToken; // Assuming JWT is stored in a cookie named jwtToken

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Attach user information from JWT to the request
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { verifyToken, csrfProtection };