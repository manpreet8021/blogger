const asyncHandler = require("../middleware/asyncHandler.js");
const User = require("../model/userModal.js")

const createUser = asyncHandler(async (req, res) => {
    
})

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({accountId: req.params.id})
    if(!req.params.id) {
        res.statusCode(400)
        throw new Error("You must Login to any metamask account to login")
    }

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
            accountId: req.params.id
        })
    }

    res.cookie('authId', req.params.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30*24*60*60*1000 //30d
    })
    
    res.json(resUser);
})

module.exports = { getUser, createUser }