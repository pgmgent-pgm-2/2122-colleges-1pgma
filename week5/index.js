require('dotenv').config();

const express = require('express');
const {routes} = require('./routes');
const app = express();

app.use(express.json()); // Dit zet je pas wanneer we gaan (req.body) posten en de body moeten parsen.

// Veel verschillende 'get', kunnen we abstracter maken met routers
app.get('/users/:userId', (req, res) => {
    console.log(req.params);
    res.send('Home');
})

// Router in eigen naam
app.use('/api', routes);


app.listen(process.env.PORT, process.env.HOSTNAME, (err) => {
    if (err) throw new Error('Server kon niet starten');

    console.log(`Server is beschikbaar op http://${process.env.HOSTNAME}:${process.env.PORT}.`);
})