const express = require('express');
const router = express.Router();
const controller = require('../controllers/songController')
const  tokenController = require('../controllers/tokenController')


router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', [tokenController.authenticateToken], controller.post);
//router.put('/:id', [tokenController.authenticateToken], controller.put);
router.delete('/:id', [tokenController.authenticateToken], controller.delete);

module.exports = router;