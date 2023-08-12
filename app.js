const express = require('express');
const walletRoutes = require('./routes/walletRoutes');
const paymentChannelRoutes = require('./routes/paymentChannelRoutes');
const app = express();

app.use(express.json());
app.use('/wallet', walletRoutes);
app.use('/paymentChannel', paymentChannelRoutes);


module.exports = app; // Export the app instance
