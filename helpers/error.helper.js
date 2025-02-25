const {
  UserAlreadyExistsError,
  MissingFieldsError,
  InvalidCredentialsError,
  UserNotFoundError,
  InvalidYearError,
  InvalidNumberOfSeatsError
} = require('../errors/validation.error');

function handleError(res, error) {
  if (
    error instanceof UserAlreadyExistsError ||
    error instanceof MissingFieldsError ||
    error instanceof InvalidCredentialsError ||
    error instanceof UserNotFoundError ||
    error instanceof InvalidYearError ||
    error instanceof InvalidNumberOfSeatsError
  ) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  handleError,
};
