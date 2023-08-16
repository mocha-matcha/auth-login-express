const { User } = require('../models');

const userData =
  [
    {
      name: 'Sal',
      email: 'sal@hotmail.com',
      password: 'pass'
    },
    {
      name: 'Lernantino',
      email: 'lernantino@gmail.com',
      password: 'password12345'
    },

];

const seedUsers = () => User.bulkCreate(userData,{    individualHooks: true,
  returning: true,});

module.exports = seedUsers;
