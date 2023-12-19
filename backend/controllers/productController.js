const asyncHandler = require("../middleware/asyncHandler.js");

const getProducts = asyncHandler(async (req, res) => {
    const provider = req.app.get('provider');
    const balance = await provider.eth.getBalance('0x528EF2ED44d714893106234CCb6FFD98C03Bf266');
    res.send()
})

module.exports = {getProducts}