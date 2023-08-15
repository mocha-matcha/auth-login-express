const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedComments();
  await seedUsers();

  await seedPosts();

  process.exit(0);
};

seedAll();
