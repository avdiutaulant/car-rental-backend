const { getCollection } = require('../helpers/database.helper');

async function getCars(query) {
  const cars = await getCollection('cars');

  return await cars.find(query).sort({ price_per_day: 1 }).toArray();
}

async function createCar(car) {
  const cars = await getCollection('cars');

  const result = await cars.insertOne(car);

  return { _id: result.insertedId, ...car };
}

module.exports = {
  getCars,
  createCar,
};
