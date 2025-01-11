const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { requireAuth } = require('../middleware/authMiddleware');

// blog routes
router.get('/', blogController.blog_index);
router.get('/blogs', requireAuth, blogController.blog_all_blogs);
router.post('/blogs', requireAuth, blogController.blog_create_post);
router.get('/blogs/create', requireAuth, blogController.blog_create_get);
router.get('/blogs/:id', requireAuth, blogController.blog_details);
router.delete('/blogs/:id', requireAuth, blogController.blog_delete);

module.exports = router;