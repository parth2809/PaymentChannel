const ethers = require('ethers');
const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);

exports.createWallet = () => {
  return ethers.Wallet.createRandom();
};

exports.getBalance = async (address) => {
  const balance = await provider.getBalance(address);
  return ethers.utils.formatEther(balance);
};
