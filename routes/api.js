var express = require('express');
var router = express.Router();
var articleController = require('./../controllers/article')
var categoryController = require('./../controllers/category')

router.get('/category', categoryController.index);
router.post('/category', categoryController.insert);
router.patch('/category/:id', categoryController.update);
router.delete('/category/:id', categoryController.delete);

router.get('/article', articleController.index);
router.post('/article', articleController.insert);
router.get('/article/:id', articleController.show);
router.patch('/article/:id', articleController.update);
router.delete('/article/:id', articleController.delete);

module.exports = router;
