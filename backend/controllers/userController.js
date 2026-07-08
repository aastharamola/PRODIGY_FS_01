const User = require('../models/User');

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      
      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
      });
    } else {
      res.status(404);
      return next(new Error('User not found'));
    }
  } catch (error) {
    next(error);
  }
};

// @desc    Update user password
// @route   PUT /api/users/password
// @access  Private
const updateUserPassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select('+password');

    if (user) {
      if (req.body.password) {
        user.password = req.body.password;
        await user.save();
        res.json({ message: 'Password updated successfully' });
      } else {
        res.status(400);
        return next(new Error('Please provide a new password'));
      }
    } else {
      res.status(404);
      return next(new Error('User not found'));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateUserProfile,
  updateUserPassword,
};
