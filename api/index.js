const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//Home Page
app.get('/', (request, response) => {
  response.status(200).json({ message: 'Welcome to the API: Jannah' });
});

//Customers
const customerRouter = require ('./routes/customer');
app.use('/customer', customerRouter);

//Order
const orderRouter = require ('./routes/order');
app.use('/order', orderRouter);

//Payment
const paymentRouter = require ('./routes/payment');
app.use('/payment', paymentRouter);


