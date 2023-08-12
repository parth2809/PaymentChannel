const express = require('express');
const walletController = require('../controllers/walletController');

const router = express.Router();

router.post('/createWallet', walletController.createWallet);
router.get('/getBalance/:address', walletController.getBalance);

// Additional routes for token-related functions can be added here

module.exports = router;
