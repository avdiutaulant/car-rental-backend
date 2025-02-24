const authService = require('../services/auth.service');
const { handleError } = require('../helpers/error.helper');

async function registerUser(req, res) {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    handleError(res, error);
  }
}

async function loginUser(req, res) {
  try {
    const result = await authService.loginUser(req.body);
    res.status(200).json(result);
  } catch (error) {
    handleError(res, error);
  }
}

async function getUserProfile(req, res) {
  try {
    const result = await authService.getUserProfile(req.user);
    res.status(200).json(result);
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
