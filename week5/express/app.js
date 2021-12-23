require('dotenv').config();

const express = require('express');
const app = express();
const {routes} = require('./routes');

app.use(express.json());

console.log(routes);

app.get('/', (request, response) => {
    // console.log(request);
    response.send('Home');
});

app.get('/users/:uid', (request, response) => {
    response.json({
        name: 'Kilian',
        id: request.params.uid
    });
});

app.use('/api', routes);

app.listen(process.env.PORT, process.env.HOST, (err) => {
    if (err) {
        throw new Error('Server kon niet starten;');
    }

    console.log(`Server is beschikbaar op http://${process.env.HOST}:${process.env.PORT}`);
});