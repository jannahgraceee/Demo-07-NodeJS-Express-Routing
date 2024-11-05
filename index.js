const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//Customers
const customerRouter = require ('/routes/customer');
app.use('/customer', customerRouter);

//Order
const orderRouter = require ('/routes/order');
app.use('/order', orderRouter);

//Payment
const paymentRouter = require ('/routes/payment');
app.use('/payment', paymentRouter);


