const { loginValidator, handleValidationErrors } = require('../../validations');
const { asyncHandler } = require('../../utils');
const { User, Friend, sequelize } = require('../../db/models')
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

    const { email, userId } = req.body;
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
    const checkFriendship = await Friend.findOne({
        where: {
            friender: userId,
            friended: potentialFriend.id
        }
    });

    const checkOther = await Friend.findOne({
        where: {
            friender: potentialFriend.id,
            friended: userId,
        }
    });

    if (!checkFriendship && !checkOther) {
        const friendRequest = await Friend.create({
            friender: userId,
            friended: potentialFriend.id,
            pending: true,
        });

        res.status(201).json({ friendRequest });
        return
    }
    const err = new Error("Request has already been made");
    err.status = 401;
    err.title = "Request has already been made";
    res.json(err)

}))

router.put('/friends', asyncHandler (async (req, res, next) => {
    const { userId } = req.body;
    // console.log("USERID", userId)
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
    // console.log("FRIENDS ARRAY", friendsArray);
    const friendsUserObjs = async () => {
        return Promise.all(friendsArray.map(async(friend) => {
            if (friend.friender === Number(userId)) {
                // console.log("HITTING THIS FRIENDED", friend.friended);
                return await User.findByPk(friend.friended);
            } else {
                // console.log("FRIENDER", friend.friender);
                return await User.findByPk(friend.friender);
            }
        }))
    };
    friendsUserObjs()
    .then(objs => {
        console.log("OBJS", objs, typeof(userId))
        res.status(201).json({
            friends: objs
        })
    })


}));

router.put('/friends/requests', asyncHandler( async (req, res) => {
    const { userId } = req.body;
    const friendRequests = await Friend.findAll({
        where: {
            friended: {
                [Op.eq]: userId
            },
            pending: {
                [Op.eq]: true
            }
        }
    });
    const requestObjs = async () => {
        return Promise.all(friendRequests.map( async(request) => {

            const user = await User.findByPk(request.friender);
            return {request, user}
        }))
    };
    requestObjs()
    .then(objs => {
        res.status(201).json({
            friendRequests: objs
        })
    })
}))

router.delete('/friends/requests', asyncHandler( async (req, res, next) => {
    const { friender, friended } = req.body;
    const requestToDelete = await Friend.findOne({
        where: {
            friender,
            friended,
            pending: {
                [Op.eq]: true
            },
        }
    })
    try {
        await requestToDelete.destroy();
        res.json("Successfully removed request")
    } catch (e) {
        const err = new Error("Could not delete request")
        err.status = 401;
        err.title = "Could not delete request";
        res.json({err})
    }

}));

router.post('/friends/requests', asyncHandler( async (req, res, next) => {
    const { friender, friended } = req.body;
    try {
        const requestToConfirm = await Friend.findOne({
            where: {
                friender,
                friended,
                pending: {
                    [Op.eq]: true
                },
            }
        })

        requestToConfirm.pending = false;

        await requestToConfirm.save();

        res.json("Successfully confirmed friend request")
    } catch (e) {
        const err = new Error("could not delete request")
        err.status = 401;
        err.title = "Could not confirm request"
        res.json({err})
    }

}))


module.exports = router;
