const walletService = require('../services/walletService');
const request = require('supertest');
const app = require('../app');

test('should create a new wallet', async () => {
  const mockWallet = {
    address: '0x1234',
    privateKey: '0x5678',
    mnemonic: { phrase: 'mock phrase', entropy: 'mock entropy' }
  };

  // Mock the walletService.createWallet function to return the mockWallet object
  walletService.createWallet = jest.fn().mockReturnValue(mockWallet);

  const res = await request(app).post('/wallet/createWallet');

  expect(res.body).toEqual(mockWallet);
});

/*
// Test for getting balance
test('should get balance', async () => {
    const address = '0xYourTestAddress';
    const balance = await walletService.getBalance(address);
    const res = await request(app).get(`/wallet/getBalance/${address}`);
  
    expect(res.body).toEqual({ balance: balance.toString() });
  });
  
  // Test for deposit (assuming deposit endpoint simply returns the deposit address)
  test('should handle deposit', async () => {
    const address = '0xYourTestAddress';
    const res = await request(app).get(`/wallet/deposit/${address}`);
  
    expect(res.body).toEqual({ depositAddress: address });
  });
  
  // Test for withdraw
  test('should handle withdraw', async () => {
    const address = '0xRecipientAddress';
    const amount = '0.1'; // In Ether
    const userPrivateKey = '0xYourPrivateKey'; // Private key of the sender
  
    const transaction = await walletService.withdraw(userPrivateKey, address, amount);
    const res = await request(app).post('/wallet/withdraw').send({
      address,
      amount,
      userPrivateKey,
    });
  
    expect(res.body).toEqual({ success: true, transaction });
  });
*/