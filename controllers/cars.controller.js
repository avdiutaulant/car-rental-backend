const carsService = require('../services/cars.service');
const { handleError } = require('../helpers/error.helper');

async function getCars(req, res) {
  try {
    const result = await carsService.getCars(req.query);
    res.status(200).json(result);
  } catch (error) {
    handleError(res, error);
  }
}

async function createCar(req, res) {
  try {
    const result = await carsService.createCar(req.body);
    res.status(201).json(result);
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = {
  getCars,
  createCar,
};
