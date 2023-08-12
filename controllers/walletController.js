const walletService = require('../services/walletService');

exports.createWallet = (req, res) => {
  const wallet = walletService.createWallet();
  res.json({
    address: wallet.address,
    privateKey: wallet.privateKey,
    mnemonic: wallet.mnemonic
  });
};

exports.getBalance = async (req, res) => {
  const address = req.params.address;
  const balance = await walletService.getBalance(address);
  res.json({ balance });
};
