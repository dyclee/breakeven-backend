const express = require('express');
const bcrypt = require('bcryptjs');
const {asyncHandler} = require('../../utils');

const {check, validationResult} = require('express-validator');
const {handleValidationErrors, loginValidator } = require('../../validations');
const {authenticated, getUserToken } = require('../../config/auth');
const {User} = require('../../db/models')

const router = express.Router();

router.put('/', loginValidator, handleValidationErrors, asyncHandler( async (req, res, next) => {
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
    user.tokenId = jti;
    await user.save();
    res.json({ token, user})
}));

router.delete('/', [authenticated], asyncHandler( async (req, res) => {
    req.user.tokenId = null;
    await req.user.save();
    res.json({messsage: 'success'});
}))

module.exports = router;
