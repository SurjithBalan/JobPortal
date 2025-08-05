const express = require('express');
const router = express.Router();

const {
  googleLogin,
  getCsrfToken,
  protectedRoute
} = require('../controllers/authControllers');

const {
  verifyToken,
  csrfProtection
} = require('../middleware/authMiddleware');

// Route to get CSRF token - Generates and sets the CSRF cookie
router.get('/csrf-token', csrfProtection, getCsrfToken);

// Public route for Google login - Requires CSRF protection
router.post('/google', csrfProtection, googleLogin);

// Protected route example - Requires both token verification and CSRF protection
router.get('/protected', verifyToken, csrfProtection, (req, res) => {
  res.json({ message: `Access granted for user: ${req.user.email}` });
});

module.exports = router;
