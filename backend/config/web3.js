const {Web3} = require("web3")

const web3 = () => {
    const provider = new Web3(process.env.ETH_END_POINT)
    return provider;
}

module.exports = web3;