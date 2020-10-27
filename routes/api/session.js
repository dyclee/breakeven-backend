const express = require('express');
const bcrypt = require('bcryptjs');
const {asyncHandler} = require('../../utils');

const {check, validationResult} = require('express-validator');
const {handleValidationErrors, loginValidator } = require('../../validations');
const {authenticated, getUserToken } = require('../../config/auth');
const {User} = require('../../db/models')

const router = express.Router();

router.put('/', loginValidator, asyncHandler( async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return next({ status: 422, errors: errors.array() })
    };
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});
    if (!bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ['Invalid credentials'];
        return next(err);
    }

    const { jti, token } = getUserToken(user);
}))

Player.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }
