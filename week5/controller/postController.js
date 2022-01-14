// GET
const postsFile = path.join(__dirname, '..', 'data', 'posts.json');
// import all necessary elements

const getPosts = () => {
    const posts = fs.readFileSync(postsFile, {
        encoding: 'utf-8' // eventueel ook flag: r (read)
    });

    response.status(200).json(JSON.parse(posts));
}

exports.module = {
    getPosts
}