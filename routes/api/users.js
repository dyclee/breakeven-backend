const { loginValidator, handleValidationErrors } = require('../../validations');
const { asyncHandler } = require('../../utils');
const { User, Friend } = require('../../db/models')
const { checkUser } = require('../../config/auth')

const express = require('express');
const user = require('../../db/models/user');
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.put('/', asyncHandler( async (req, res, next) => {
    const thing = await (checkUser(req))
    const { tokenId, user} = thing;
    res.status(201).json({
        tokenId, user
    })
}))

router.get('/friends', asyncHandler (async (req, res, next) => {
    const { user } = req.body;
    const friendedArray = await Friend.findAll({
        where: {
            friended: user.id,
            pending: false
        },
        include: [User],
    });
    const friendedUserObjs = friendedArray.map((friend) => friend.User.id)
    const frienderArray = await Friend.findAll({
        where: {
            friender: user.id,
            pending: false
        },
        include: [User]
    });
    const frienderUserObjs = frienderArray.map((friend) => friend.user.id);

    const allFriendsObjs = frienderUserObjs.concat(friendedUserObjs)

    console.log(allFriendsObjs);
    res.status(201).json({
        allFriendObjs
    })
}))

module.exports = router;
