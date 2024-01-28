const Razorpay = require('razorpay');
const { config } = require('dotenv');
config({ path: "./config/config.env" });
const path = require('path');
const file = require('fs');

// app.get('/payment', (req, res) => {

// });

const r_instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,

});

const fieldserver ={
    "razorpay_payment_id": "pay_29QQoUBi66xm2f",
    "razorpay_order_id": "order_9A33XWu170gUtm",
    "razorpay_signature": "9ef4dffbfd84f1318f6739a3ce19f9d85851857ae648f114332d8401e0949a3d"
  }

const error ={
    "error": {
    "code": "BAD_REQUEST_ERROR",
    "description": "Order amount less than minimum amount allowed",
    "source": "business",
    "step": "payment_initiation",
    "reason": "input_validation_failed",
    "metadata": {},
    "field": "amount"
  }
}  

// generated_signature = hmac_sha256(order_id + "|" + razorpay_payment_id, secret);

  


const checkout = async (req, res) => {
    try {
        res.send('Api started');
    } catch (error) {
        console.log(error.message);
    }
};

const createOrder = async (req, res) => {
    let amountn = 500;
    const options = {
        amount: amount,
        currency: 'INR',
        reciept: 'sjjjaiswal110@gmail.com'
    }
    r_instance.orders.create(options, (err, order) => {
        if (!err) {
            res.status(200).send({
                "id": "order_IluGWxBm9U8zJ8",
                "entity": "order",
                "amount": 5000,
                "amount_paid": 0,
                "amount_due": 5000,
                "currency": "INR",
                "receipt": "rcptid_11",
                "offer_id": null,
                "status": "created",
                "attempts": 0,
                "notes": [],
                "created_at": 1642662092,
                
                
                success: true,
                msg: "Succesful",
                order_id: order.id,
                amount: amountn,
                key_id: process.env.RAZORPAY_API_KEY,
                description: "Order description",
                contact: "9516563284",
                name: "SJ",
                email: 'sanjayaswal2003@gmail.com'
            });
        } else {
            res.status(400).send({ success: false,
                 msg: "Something went wrong" 
                
                
                
                });
        }
    })

}

module.exports = { checkout, createOrder } 