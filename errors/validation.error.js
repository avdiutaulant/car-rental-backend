class UserAlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserAlreadyExistsError';
    this.statusCode = 409;
  }
}

class MissingFieldsError extends Error {
  constructor(messages) {
    super(messages);
    this.name = 'MissingFieldsError';
    this.statusCode = 400;
  }
}

class InvalidCredentialsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidCredentialsError';
    this.statusCode = 401;
  }
}

class UserNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserNotFoundError';
    this.statusCode = 404;
  }
}

class InvalidYearError extends Error {
  constructor(message) {
      super(message);
      this.name = 'InvalidYearError';
      this.statusCode = 409;
  }
}

class InvalidNumberOfSeatsError extends Error {
  constructor(message) {
      super(message);
      this.name = 'InvalidNumberOfSeatsError';
      this.statusCode = 409;
  }
}

module.exports = {
  UserAlreadyExistsError,
  MissingFieldsError,
  InvalidCredentialsError,
  UserNotFoundError,
  InvalidYearError,
  InvalidNumberOfSeatsError
};
