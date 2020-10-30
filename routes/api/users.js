const { loginValidator, handleValidationErrors } = require('../../validations');
const { asyncHandler } = require('../../utils');
const { User } = require('../../db/models')
const { checkUser } = require('../../config/auth')

const express = require('express');
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.put('/', asyncHandler( async (req, res, next) => {
    const thing = await (checkUser(req))
    const { tokenId, user} = thing;
    console.log("what", user.fullName, tokenId)
    res.status(201).json({
        tokenId, user
    })
}))

module.exports = router;
