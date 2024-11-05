const express = require('express');
const router = express.Router();

// Customers
// url - http://localhost:4000/customer
app.get('/', (request, response) => {
    response.status(200).json({ message: 'GET all customers' });
});

// url - http://localhost:4000/customer
app.post('/', (request, response) => {
    response.status(200).json({ message: `CREATE new customer` });
});

// url - http://localhost:4000/customer/1
app.get('/:id', (request, response) => {
    response.status(200).json({ message: `GET customer with id ${request.params.id}` });
});

// url - http://localhost:4000/customer/1
app.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE customer with id ${request.params.id}` });
});

// url - http://localhost:4000/customer/1
app.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE customer with id ${request.params.id}` });
});


module.exports = router;

// url - http://localhost:4000/customer/1