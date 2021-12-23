const express = require('express');
const fs = require('fs');
const path = require('path');
const postFilePath = path.join(__dirname, '..', 'data', 'posts.json');

const getPostsFromFile = () => {
    return JSON.parse(fs.readFileSync(postFilePath), {
        encoding: 'utf8'
    });
}

const getPost = (req, res) => {
    const posts = getPostsFromFile();
    const post = posts.find(post => post.id == req.params.id);
    res.status(200).json(post);
}

module.exports = {
    getPost
}