const express = require('express');
const router = express.Router();
const { updateUserProfile, updateUserPassword } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.put('/profile', protect, updateUserProfile);
router.put('/password', protect, updateUserPassword);

module.exports = router;
