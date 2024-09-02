const Post = require('../models/postModel');

// Display all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.render('index', { posts });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// Show form to create new post
exports.getNewPostForm = (req, res) => {
    res.render('new-post');
};

// Handle new post creation
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = new Post({ title, content });
        await post.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// Show form to edit post
exports.getEditPostForm = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render('edit-post', { post });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// Handle post update
exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Post.findByIdAndUpdate(req.params.id, { title, content });
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// Handle post deletion
exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
