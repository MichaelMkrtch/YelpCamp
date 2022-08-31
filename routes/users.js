const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const passport = require('passport');
const catchAsync = require('../utilities/catchAsync');
const User = require('../models/user');

router.route('/register').get(users.renderRegisterForm).post(catchAsync(users.register));

router.route('/login')
  .get(users.renderLoginForm)
  .post(passport.authenticate('local', {
      failureFlash: true,
      failureRedirect: '/login',
      keepSessionInfo: true,
    }),
    users.login
  );

router.post('/logout', users.logout);

module.exports = router;
