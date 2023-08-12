const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);

const paymentChannelFactoryABI = [...]; // ABI for PaymentChannelFactory contract

exports.createChannel = async (senderPrivateKey, receiverAddress, duration) => {
    const wallet = new ethers.Wallet(senderPrivateKey, provider);
    const factoryContract = new ethers.Contract(process.env.FACTORY_CONTRACT_ADDRESS, paymentChannelFactoryABI, wallet);
    const tx = await factoryContract.createChannel(receiverAddress, duration);
    const receipt = await tx.wait();
    const event = receipt.events?.find(e => e.event === 'ChannelCreated');
    return {
    channelAddress: event.args.channel,
    transactionHash: tx.hash
    };
};

exports.depositFunds = async (senderPrivateKey, channelAddress, amount) => {
    const wallet = new ethers.Wallet(senderPrivateKey, provider);
    const channelContract = new ethers.Contract(channelAddress, paymentChannelABI, wallet);
    const tx = await channelContract.deposit({ value: ethers.utils.parseEther(amount) });
    return tx.wait();
};

exports.closeChannel = async (receiverPrivateKey, channelAddress, amount, signature) => {
    const wallet = new ethers.Wallet(receiverPrivateKey, provider);
    const channelContract = new ethers.Contract(channelAddress, paymentChannelABI, wallet);
    const tx = await channelContract.close(amount, signature);
    return tx.wait();
};

exports.claimTimeout = async (senderPrivateKey, channelAddress) => {
    const wallet = new ethers.Wallet(senderPrivateKey, provider);
    const channelContract = new ethers.Contract(channelAddress, paymentChannelABI, wallet);
    const tx = await channelContract.claimTimeout();
    return tx.wait();
};

  