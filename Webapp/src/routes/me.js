const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController'); //Doi tuong

router.get('/stored/toys', meController.storedToys);


module.exports = router;
