const carsRepository = require('../repositories/cars.repository');
const {
  InvalidYearError,
  InvalidNumberOfSeatsError,
  MissingFieldsError,
} = require('../errors/validation.error');

function getCars(reqQuery) {
  let query = {};

  if (reqQuery.year) {
    const year = parseInt(reqQuery.year);
    if (isNaN(year) || year <= 1884) {
      throw new InvalidYearError(
        'Year must be a valid number greater than 1884',
      );
    }
    query.year = year;
  }

  if (reqQuery.color) {
    query.color = reqQuery.color.toLowerCase();
  }

  if (reqQuery.steeringType) {
    query.steeringType = reqQuery.steeringType.toLowerCase();
  }

  if (reqQuery.numberOfSeats) {
    const numberOfSeats = parseInt(reqQuery.numberOfSeats);
    if (isNaN(numberOfSeats) || numberOfSeats <= 1) {
      throw new InvalidNumberOfSeatsError(
        'Number of seats must be a valid number greater than 1',
      );
    }
    query.numberOfSeats = numberOfSeats;
  }

  return carsRepository.getCars(query);
}

async function createCar(reqBody) {
  const { name, pricePerDay, year, color, steeringType, numberOfSeats } =
    reqBody;

  if (
    !name ||
    !pricePerDay ||
    !year ||
    !color ||
    !steeringType ||
    !numberOfSeats
  ) {
    throw new MissingFieldsError('All fields are required');
  }

  const yearInt = parseInt(year);
  if (isNaN(yearInt) || yearInt <= 1884) {
    throw new InvalidYearError('Year must be a valid number greater than 1884');
  }

  const numberOfSeatsInt = parseInt(numberOfSeats);
  if (isNaN(numberOfSeatsInt) || numberOfSeatsInt <= 1) {
    throw new InvalidNumberOfSeatsError(
      'Number of seats must be a valid number greater than 1',
    );
  }

  const newCar = {
    name,
    pricePerDay,
    year: yearInt,
    color,
    steeringType,
    numberOfSeats: numberOfSeatsInt,
  };
  return await carsRepository.createCar(newCar);
}

module.exports = {
  getCars,
  createCar,
};
