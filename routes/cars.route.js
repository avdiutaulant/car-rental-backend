const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars.controller')

router.get('/rental-cars', carsController.getCars)

router.post('/rental-cars', carsController.createCar)

module.exports = router;
