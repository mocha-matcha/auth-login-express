const { Comment } = require('../models');

const commentData = [
  {
    comment:'this is a comment',
    date_created:'September 22, 2021 22:00:00',
    user_id:1,
    post_id:1
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
