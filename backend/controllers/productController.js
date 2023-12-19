//const { ethers } = require("ethers");
const {Web3} = require("web3")
const asyncHandler = require("../middleware/asyncHandler.js");

const getProducts = asyncHandler(async (req, res) => {
    console.log("here")
    // const provider = new ethers.providers.JsonRpcProvider(process.env.ETH_END_POINT);
    // const balance = await provider.getBalance('0x528EF2ED44d714893106234CCb6FFD98C03Bf266')
    const web3 = new Web3(process.env.ETH_END_POINT)
    const balance = await web3.eth.getBalance('0x528EF2ED44d714893106234CCb6FFD98C03Bf266');
    console.log(balance);
    res.success()
})

module.exports = {getProducts}