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

const authenticated = [bearerToken(), restoreUser];

module.exports = {
    getUserToken, authenticated
}
