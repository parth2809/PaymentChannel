const paymentChannelService = require('../services/paymentChannelService');

exports.createChannel = async (req, res) => {
    const { senderPrivateKey, receiverAddress, duration } = req.body;
    try {
    const result = await paymentChannelService.createChannel(senderPrivateKey, receiverAddress, duration);
    res.json(result);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

exports.depositFunds = async (req, res) => {
    const { senderPrivateKey, channelAddress, amount } = req.body;
    try {
        const result = await paymentChannelService.depositFunds(senderPrivateKey, channelAddress, amount);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  
exports.closeChannel = async (req, res) => {
    const { receiverPrivateKey, channelAddress, amount, signature } = req.body;
    try {
        const result = await paymentChannelService.closeChannel(receiverPrivateKey, channelAddress, amount, signature);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
  
exports.claimTimeout = async (req, res) => {
    const { senderPrivateKey, channelAddress } = req.body;
    try {
        const result = await paymentChannelService.claimTimeout(senderPrivateKey, channelAddress);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
