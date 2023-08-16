const sequelize = require('../config/connection');

const seedComments = require('./commentData.js');
const seedPosts = require('./postData.js');
const seedUsers = require('./userData.js');
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
