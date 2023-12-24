const Joi = require("joi");
const asyncHandler = require("../middleware/asyncHandler.js");
const User = require("../model/userModal.js");

var loginSchema = Joi.object({
    id: Joi.string().required()
})

const getUser = asyncHandler(async (req, res) => {
    if(loginSchema.validate(req.body)) {
        const user = await User.findOne({accountId: req.body.id})

        var resUser = {
            displayName: '',
            bio: '',
            profileImage: ''
        };
        
        if(user) {
            resUser = {
                displayName: user.displayName,
                bio: user.bio,
                profileImage: user.profileImage
            }
        } else {
            await User.create({
                accountId: req.body.id
            })
        }

        res.cookie('jwt', req.body.id, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30*24*60*60*1000 //30d
        })
        
        res.json(resUser);
    } else {
        res.status(400)
        throw new Error("You must Login to any metamask account to login")
    }
    
})

module.exports = { getUser }