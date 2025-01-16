const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const UserRoute = require('./route/UserRoute');
const ProductRoute = require('./route/ProductRoute');
const PaymentRoute = require('./route/PaymentRoute');
const CustomerRoute = require('./route/CustomerRoute');
const OrderRoute = require('./route/OrderRoute');

const PORT = process.env.PORT | 3000;


mongoose.connect('mongodb://127.0.0.1:27017/pos_db').then(() => {
    console.log("mongodb connected");
}).catch((e) => {
    console.log(e);
})

const app = express();
app.use(bodyParser.json());

app.use('/api/vi/customers', CustomerRoute);
app.use('/api/vi/orders', OrderRoute);
app.use('/api/vi/productrs', ProductRoute);
app.use('/api/vi/payments', PaymentRoute);
app.use('/api/vi/userrs', UserRoute);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});