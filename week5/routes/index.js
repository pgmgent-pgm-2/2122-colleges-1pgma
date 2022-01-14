// Wat er gebeurt wanneer je een route bezoekt kan je refactoren in een controlller!

const express = require('express');
const router = express.Router();
const fs = require('fs'); // Pas na dat we hardcoded/via insomnia posten
const path = require('path');
const posts = require('../data/posts.json');

const { v4: uuid } = require('uuid');

// na dat je pas in functies heb gemaakt abstrageren in variabele
const postsFile = path.join(__dirname, '..', 'data', 'posts.json');

router.get('/posts', (request, response) => {
    const posts = fs.readFileSync(postsFile, {
        encoding: 'utf-8' // eventueel ook flag: r (read)
    });

    // 1. response.send('Test');
    // 2. response.json('Test');
    // 2. response.status(200).json('Test');
    response.status(200).json(posts);
})

const postController = require('../controller/postController');
router.get('/posts', postController.getPosts());


router.get('/posts/:id', (request, response) => {
    console.log(request.params.id);
    // 1. response.status(200).send(`Post met ID: ${request.params.id}`);
    const post = posts.find(post => post.id == request.params.id);
    response.status(200).json(post);
})

router.post('/posts', (request, response) => {
    // const post = {
    //     "userId": 3,
    //     "id": 101,
    //     "title": "Test! eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    //     "body": "Wow test! similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
    // };

    // Na lokalpost request! 
    // Eerst lezen -> dan aanpassen en overschrijven.
    // fs.readFileSync(path.join(__dirname, '..', 'data', 'posts.json')); // Plaats dit in een variabele want gebruiken in meerdere methodes
    const posts = fs.readFileSync(postsFile, {
        encoding: 'utf-8' // eventueel ook flag: r (read)
    }); // later try catch want dit kan mislopen
    // readFileSync returnt een string - JSON.parse(posts)
    const postsArray = JSON.parse(posts);
    // console.log(posts, JSON.parse(posts));

    // post.id = uuid();
    const post = {
        ...request.body,
        id: uuid(),
        createdAt: Date.now()
    }

    // Na dat je dus je id hebt toegevoegd zal je posts array veranderen -> en dan er na overschrijven
    postsArray.push(post);
    // postsArray is geupdate
    console.log(postsArray);

    // Nu schrijf je het bestand over
    fs.writeFileSync(postsFile, JSON.stringify(postsArray, null, 2)); // data moet een string zijn // bekijk tweede en derde argument

    response.status(200).json(post);
})

router.delete('/posts/:id', (request, response) => {
    // lees bestand uit
    const posts = fs.readFileSync(postsFile, {
        encoding: 'utf-8' // eventueel ook flag: r (read)
    }); // later try catch want dit kan mislopen

    // we kunnen direct updaten maar je wil mss eerst weten of wel betstaat om melding te tonen
    // const updatedPosts = JSON.parse(posts).filter(post => post.id !== request.params.id);
    const postIndex = JSON.parse(posts).findIndex(post => post.id == request.params.id);

    if (postIndex > -1) {
        console.log('Gevonden!');
        const updatedPosts = JSON.parse(posts).filter(post => post.id != request.params.id);
        fs.writeFileSync(postsFile, JSON.stringify(updatedPosts, null, 2)); 
        response.json({
            succes: 'Verwijderd!'
        })
    } else {
        console.log('Niet gevonden :(');
        response.json({
            error: 'Niet gevonden!'
        })
    }
})

router.put('/posts/:id', (request, response) => {
        // lees bestand uit
        const posts = fs.readFileSync(postsFile, {
            encoding: 'utf-8' // eventueel ook flag: r (read)
        }); // later try catch want dit kan mislopen

        const postsArray = JSON.parse(posts);
    
        // we kunnen direct updaten maar je wil mss eerst weten of wel betstaat om melding te tonen
        // const updatedPosts = JSON.parse(posts).filter(post => post.id !== request.params.id);
        const postIndex = postsArray.findIndex(post => post.id == request.params.id);

        if (postIndex > -1) {
            console.log('Gevonden!');
            // JSON.parse(posts)[postIndex] = request.body; // zo overschrijf je volledig
            postsArray[postIndex] = {
                ...postsArray[postIndex],
                ...request.body
            }; // zo overschrijf je enkel wat je meegeeft


        console.log(posts);

            fs.writeFileSync(postsFile, JSON.stringify(postsArray, null, 2)); 

            response.json({
                succes: 'Updated!'
            })
        } else {
            console.log('Niet gevonden :(');
            response.json({
                error: 'Niet gevonden!'
            })
        }
})

exports.routes = router;