const { loginValidator, handleValidationErrors } = require('../../validations');
const { asyncHandler } = require('../../utils');
const { User, Friend } = require('../../db/models')
const { checkUser } = require('../../config/auth');
const { Op } = require('sequelize');

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
    console.log(req.body);
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

router.put('/friends', asyncHandler (async (req, res, next) => {
    const { userId } = req.body;
    let friends = [];

    const friendsArray = await Friend.findAll({
        where: {
            [Op.or]: [{
                friended: userId
            }, {
                friender: userId
            }],
            pending: {
                [Op.eq]: false
            }
        },
    });
    // console.log(friendsArray);
    const friendsUserObjs = async () => {
        return Promise.all(friendsArray.map(async(friend) => {
            if (friend.friender === userId) {
                return await User.findByPk(friend.friended);
            }
            return await User.findByPk(friend.friender);
        }))
    };
    friendsUserObjs()
    .then(objs => {
        res.status(201).json({
            friends: objs
        })
    })


}));

module.exports = router;
