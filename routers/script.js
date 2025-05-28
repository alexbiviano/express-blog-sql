const express = require('express');
const router = express.Router();
const controllerPosts = require('../controller/appController');

router.get('/', controllerPosts.index);
router.get('/:id', controllerPosts.show);
router.patch('/:id', controllerPosts.modify);
router.post('/', controllerPosts.store);
router.put('/:id', controllerPosts.update);
router.delete('/:id', controllerPosts.destroy);

module.exports = router;