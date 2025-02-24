const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/user.repository');
const {
  UserAlreadyExistsError,
  MissingFieldsError,
  InvalidCredentialsError,
  UserNotFoundError,
} = require('../errors/validation.error');

async function registerUser(reqBody) {
  const { fullName, email, username, password } = reqBody;

  if (!fullName || !email || !username || !password) {
    throw new MissingFieldsError('All fields are required');
  }

  const existingUser = await userRepository.getUserByUsername(username);

  if (existingUser) {
    throw new UserAlreadyExistsError('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = { fullName, email, username, password: hashedPassword };
  await userRepository.createUser(newUser);

  return { message: `User ${username} registered successfully` };
}

async function loginUser(reqBody) {
  const { username, password } = reqBody;

  const user = await userRepository.getUserByUsername(username);

  if (!user) {
    throw new InvalidCredentialsError('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new InvalidCredentialsError('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return { token };
}

async function getUserProfile(user) {
  if (!user || !user.id) {
    throw new UserNotFoundError('User not found');
  }
  const userData = await userRepository.getUserById(user.id);
  if (!userData) {
    throw new UserNotFoundError('User not found');
  }
  return {
    username: userData.username,
    email: userData.email,
    fullName: userData.fullName,
  };
}

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
