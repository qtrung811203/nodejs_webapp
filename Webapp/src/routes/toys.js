const express = require('express');
const router = express.Router();
const toysController = require('../app/controller/ToysController'); //Doi tuong

router.get('/create', toysController.create);
router.get('/:id/edit', toysController.edit);
router.put('/:id', toysController.update);
router.delete('/:id', toysController.delete);
router.post('/store', toysController.store);
router.get('/:slug', toysController.show);

module.exports = router;
