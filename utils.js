const bearerToken = require('express-bearer-token'),

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);



module.exports = {
    asyncHandler,
}
