const asyncHandler = require("../middleware/asyncHandler.js");
const User = require("../model/userModal.js")

const createUser = asyncHandler(async (req, res) => {
    
})

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findOne({accounId: req.params.id});
    
    res.json(user);
})

module.exports = { getUser, createUser }