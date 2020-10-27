const {validationResult, check } = require('express-validator');

const signupValidator = [
    check("fullName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide your name")
        .isLength({ max: 100})
        .withMessage("Name must not be more than 100 characters long"),
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valid email")
        .isLength({ max: 100})
        .withMessage("Email must not be more than 100 characters long"),
    check("password")
        .exists({checkFalsy: true})
        .withMessage("Please provide a valid password")
        .isLength({ min: 10 })
        .withMessage("Password must be at least 10 characters"),
    check("confirmPassword")
        .exists({checkFalsy: true})
        .withMessage("Please confirm your password")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Confirm Password does not match Password");
            };
            return true;
        })
]

const loginValidator = [
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide an email address")
        .isLength({ max: 100 })
        .withMessage("Email must not be more than 100 characters long"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password")
        .isLength({ min: 10 })
        .withMessage("Password must be at least 10 characters"),
]

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errorsMsgs = validationErrors.array().map((error) => error.msg);

        const err = new Error("Bad Request");
        err.status = 400;
        err.title = "Bad Request";
        err.errors = errorsMsgs

        next(err);
    }
    next();
}

module.exports = {
    signupValidator,
    loginValidator,
    handleValidationErrors,
}
