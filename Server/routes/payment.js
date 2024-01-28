const express =require('express');
const app = express();
// const router = app.Router();
const payment_controller = require('../Controllers/paym_control.js');

app.get('/razorpay',payment_controller.checkout);
app.get('/razorpay_payment',payment_controller.createOrder);
// router.route('');
module.exports = {app};
