const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.status(200).send('Home');
})

router.get('/todos', (request, response) => {
    response.json([
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        }
    ]);
})

router.get('/posts', (request, response) => {
    response.json([
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        }
    ]);
})

module.exports = router;