const asyncHandler = require("./asyncHandler")
const User = require('../model/userModal.js')

const protect = asyncHandler(async(req, res, next) => {
    let token = '';

    token = req.cookies.authId;

    if(token) {
        let user = await User.findOne({accountId: token});
        if(user) {
            req.user = user
            next()
        } else {
            res.statusCode(401);
            throw new Error("Unauthorized, authentication id is not Valid")
        }
    } else {
        res.statusCode(401);
        throw new Error("Unauthorized, user is not authenticated")
    }
})