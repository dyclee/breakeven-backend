const jwt = require("jsonwebtoken");
const {jwtConfig} = require("./index")
const { User } = require('../db/models');
const bearerToken = require('express-bearer-token')


const { secret, expiresIn } = jwtConfig;
const uuid = require('uuid').v4

const getUserToken = user => {
    const userData = {
        email: user.email,
        userId: user.id,
        fullName: user.fullName,
    };

    const jwtid = uuid();

    const token = jwt.sign(
        { userData },
        secret,
        { expiresIn: Number.parseInt(expiresIn), jwtid }
    );

    user.tokenId = jwtid;
    return {
        token,
        jti: jwtid,
    }
}

function restoreUser(req, res, next) {
    const { token } = req;

    if (!token) {
        return next({ status: 401, message: "No Token"});
    }

    return jwt.verify(token, secret, null, async (err, payload) => {
        if (err) {
            err.status = 403;
            return next(err);
        }

        const tokenId = payload.jti;

        try {
            req.user = await User.findOne({ where: { tokenId }})
        } catch (e) {
            return next(e);
        }

        if (!req.user) {
            return next({ status: 404, message: 'Session not found'});
        }
        next();
    })
}
function checkUser(req) {
    const { token } = req.body;

    if (!token) {
        const err = new Error("No Token")
        err.status(401)
        return err;
    }

    const decode = jwt.verify(token, secret, null, async (err, payload) => {
        if (err) {
            err.status = 403;
            err.message = "Unable to verify token";
            return err;
        }

        const tokenId = payload.jti;
        let user;
        try {
            user = await User.findOne({ where: { tokenId }})
        } catch (e) {
            e.message = "Could not find User with tokenId";
            return e;
        }
        return {
            user,
            tokenId
        }

    })
    return decode;
}

const authenticated = [bearerToken(), restoreUser];

module.exports = {
    getUserToken, authenticated, checkUser
}
