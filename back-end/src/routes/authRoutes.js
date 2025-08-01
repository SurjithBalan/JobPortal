const express = require('express');
const router = express.Router();
const { googleLogin, getCsrfToken, protectedRoute } = require('../controllers/authControllers');
const { verifyToken, csrfProtection } = require('../middleware/authMiddleware'); // Import csrfProtection

// Route to get CSRF token (needs csrfProtection to generate and set the cookie)
router.get('/csrf-token', csrfProtection, getCsrfToken); // <-- CSRF token generation endpoint

// Public route for Google login (this POST request needs CSRF protection)
router.post('/google', csrfProtection, googleLogin); // <--- Make sure csrfProtection is here

// Protected route example (this GET request *also* needs CSRF protection if you expect header)
router.get('/protected', verifyToken, csrfProtection, (req, res) => { // <--- Added csrfProtection here
    res.json({ message: `Access granted for user: ${req.user.email}` });
});

module.exports = router;