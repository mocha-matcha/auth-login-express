const { Comment } = require('../models');

const commentData = [
  {
    "comment":'this is a comment',
    "date_created":'September 22, 2021 22:00:00',
  }

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
