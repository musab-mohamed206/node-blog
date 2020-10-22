const express = require('express');
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');


const router = express.Router();

// blog routs
router.get('/blogs', blogController.index);
// create new blog page
router.get('/blogs/create', blogController.create);
//crate new blog
router.post('/blogs' , blogController.stor);
// show single blog
router.get('/blogs/:id' , blogController.show);
// deleate method
router.delete('/blogs/:id' , blogController.distroy);

module.exports = router;