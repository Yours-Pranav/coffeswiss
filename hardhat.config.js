require("@nomicfoundation/hardhat-toolbox");
module.exports = {  solidity: "0.8.19",
  networks: {    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",      accounts: ["eac05d6e4a7b214ffadf4947448bfaa02489cdf93e30dcc53f210bc946d22f7e"], //Your private key starting with "0x"
    },  },
};
