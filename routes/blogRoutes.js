const express = require('express');
const blogContoller = require('../controllers/blogController');

const router = express.Router();

router.get('/', blogContoller.blog_index);
router.post('/', blogContoller.blog_create_post);
router.get('/create', blogContoller.blog_create_get);
router.get('/:id', blogContoller.blog_details);
router.delete('/:id', blogContoller.blog_delete);

module.exports = router;