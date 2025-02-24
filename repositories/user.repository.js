const { ObjectId } = require('mongodb');
const { getCollection } = require('../helpers/database.helper');

async function createUser(user) {
  const users = await getCollection('users');

  return await users.insertOne(user);
}

async function getUserByUsername(username) {
  const users = await getCollection('users');

  return await users.findOne({ username });
}

async function getUserById(id) {
  const users = await getCollection('users');

  return await users.findOne(
    { _id: new ObjectId(id) },
    { projection: { password: 0 } },
  );
}

module.exports = {
  createUser,
  getUserByUsername,
  getUserById,
};
