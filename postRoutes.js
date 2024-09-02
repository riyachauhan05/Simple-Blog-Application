const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route to display all posts
router.get('/', postController.getAllPosts);

// Route to show form to create new post
router.get('/new-post', postController.getNewPostForm);

// Route to handle new post creation
router.post('/new-post', postController.createPost);

// Route to show form to edit a post
router.get('/edit-post/:id', postController.getEditPostForm);

// Route to handle post update
router.post('/edit-post/:id', postController.updatePost);

// Route to handle post deletion
router.post('/delete-post/:id', postController.deletePost);

module.exports = router;
