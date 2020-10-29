const express = require('express');
const bcrypt = require('bcryptjs');
const {asyncHandler} = require('../../utils');

const {check, validationResult} = require('express-validator');
const {handleValidationErrors, loginValidator, signupValidator } = require('../../validations');
const {authenticated, getUserToken } = require('../../config/auth');
const {User} = require('../../db/models');
const { route } = require('./users');

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
    const { token } = tokenObj;

    // localStorage.setItem("token", token);
    res.status(201).json({
        user,
        tokenObj,
    })

}))
router.post('/', asyncHandler( async (req, res, next) => {

    // if (!errors.isEmpty()) {
    //     return next({ status: 422, errors: errors.array() })
    // };
    const { email, password } = req.body;
    console.log("email: ", email, "  password: ", password);

    const user = await User.findOne({ where: { email: email }});
    // console.log("User: ", user)
    if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
        const err = new Error("Login failed");
        err.message = "Incorrect email and password"
        err.status = 401;
        err.title = "Login failed";
        err.errors = ['Invalid credentials'];
        console.log(err);
        return next(err);
    }
    // res.json({
    //     title: err.title || "Server Error",
    //     message: err.message,
    //     errors: err.errors,
    //     stack: isProduction ? null : err.stack,
    //     stack: err.stack,
    //   });
    const { jti, token } = getUserToken(user);
    // localStorage.setItem("token", token);
    user.tokenId = jti;
    await user.save();
    res.json({ token, user})
}));

router.delete('/logout', [authenticated], asyncHandler( async (req, res) => {
    localStorage.clear();
    req.user.tokenId = null;
    await req.user.save();
    res.json({message: 'success'});
}))


module.exports = router;
