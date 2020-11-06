const express = require('express');
const bcrypt = require('bcryptjs');
const {asyncHandler} = require('../../utils');

const {check, validationResult} = require('express-validator');
const {handleValidationErrors, loginValidator, signupValidator } = require('../../validations');
const {authenticated, getUserToken } = require('../../config/auth');
const {User} = require('../../db/models');
const { route } = require('./users');
const { urlencoded } = require('express');

const router = express.Router();

router.post('/signup', signupValidator, handleValidationErrors, asyncHandler( async (req, res, next) => {
    const { fullName, email, password } = req.body;
    console.log(email);
    const hashedPassword = await bcrypt.hash(password, 9);
    const user = await User.create({
        fullName,
        email,
        hashedPassword,
    });
    const tokenObj = getUserToken(user);
    const { token, jti } = tokenObj;
    user.tokenId = jti;
    await user.save();
    // localStorage.setItem("token", token);
    res.status(201).json({
        user,
        tokenObj,
    })

}))
router.post('/', asyncHandler( async (req, res, next) => {

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email }});
    // console.log(user);
    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error("Login failed");
        err.message = "Incorrect email and password"
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
    // localStorage.clear();
    req.user.tokenId = null;
    await req.user.save();
    res.json({message: 'success'});
}))


module.exports = router;
