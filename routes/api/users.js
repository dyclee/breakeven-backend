const { loginValidator, handleValidationErrors } = require('../../validations');
const { asyncHandler } = require('../../utils');
const { User, Friend } = require('../../db/models')
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
    res.status(201).json({
        tokenId, user
    })
}));

router.post('/friends', asyncHandler (async (req, res, next) => {
    const { email, user } = req.body;
    const potentialFriend = await User.findOne({
        where: {
            email
        }
    });
    if (!potentialFriend) {
        const err = new Error("No account associated with email input")
        err.status = 400;
        err.title = "User not found";
        return err;
    }
    const friendRequest = await Friend.create({
        friender: user.id,
        friended: potentialFriend.id,
        pending: true,
    });

    res.status(201).json({ friendRequest })
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
