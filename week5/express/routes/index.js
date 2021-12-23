const express = require('express');
const { v4: uuid } = require('uuid');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const postFilePath = path.join(__dirname, '..', 'data', 'posts.json');
const postController = require('../controllers/postController');
// const posts = require('../data/posts.json');
const getPostsFromFile = () => {
    return JSON.parse(fs.readFileSync(postFilePath), {
        encoding: 'utf8'
    });
}

const writePostsToFile = (posts) => {
    fs.writeFileSync(postFilePath, JSON.stringify(posts, null, 2));
}

router.get('/posts', (req, res) => {
    // const posts = fs.readFileSync(path.join(__dirname, '..', 'data', 'posts.json'), {
    //     encoding: 'utf8'
    // });
    const posts = getPostsFromFile();
    res.status(200).json(JSON.parse(posts));
});

router.get('/posts/:id', postController.getPost);

router.post('/posts', (req, res) => {
    // Read posts from file
    const posts = getPostsFromFile();
    const post = {
        ...req.body,
        id: uuid(),
        createdAt: Date.now()
    };
    // Edit posts array - add new post
    posts.push(post);
    // Place new posts Array in posts.json file
    fs.writeFileSync(postFilePath, JSON.stringify(posts, null, 2));

    res.status(200).json(post);
});

router.delete('/posts/:id', (req, res) => {
    const posts = getPostsFromFile();
    const postExists = posts.some(post => post.id == req.params.id);

    if (postExists) {
        const filteredPosts = posts.filter(post => post.id != req.params.id);
        writePostsToFile(filteredPosts);
        // fs.writeFileSync(postFilePath, JSON.stringify(filteredPosts, null, 2));
        return res.status(200).json({
            "message": 'succes'
        });
    }

    res.status(200).json({
        "message": 'Does not exist'
    });  
});

router.put('/posts/:id', (req, res) => {
    // Read posts file
    const posts = getPostsFromFile();

    // Post array updaten
    const idx = posts.findIndex(post => post.id == req.params.id);

    if (idx > -1) {
        posts[idx] = {
            ...posts[idx],
            ...req.body
        };

        writePostsToFile(posts);
        return res.status(200).json(posts[idx]);
    }

    return res.status(200).json({
        "message": 'item does not exist'
    });
    // Overwrite
});


exports.routes = router;