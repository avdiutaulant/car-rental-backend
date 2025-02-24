const getDatabaseConnection = require('../config/database.config');

async function getCollection(collectionName) {
  const db = await getDatabaseConnection();

  return db.collection(collectionName);
}

module.exports = {
  getCollection,
};
