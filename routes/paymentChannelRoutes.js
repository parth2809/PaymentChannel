const express = require('express');
const paymentChannelController = require('../controllers/paymentChannelController');

const router = express.Router();

router.post('/createChannel', paymentChannelController.createChannel);
router.post('/depositFunds', paymentChannelController.depositFunds);
router.post('/closeChannel', paymentChannelController.closeChannel);
router.post('/claimTimeout', paymentChannelController.claimTimeout);

module.exports = router;
