require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routes')

const PORT = process.env.PORT || 8080;
const BASE_URL = process.env.BASE_URL || 'localhost';

// Get verwacht callback functie
app.get('/api', (req, res) => {
    res.send()
});

// Use kan je gebruiken voor je router
app.use('/api', router);

app.listen(PORT, BASE_URL, (err) => {
    if (err) {
        return console.error('Something went wrong!', err.message);
    }

    console.log('Server is running!');
});