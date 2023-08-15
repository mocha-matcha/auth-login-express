const { Comment } = require('../models');

const commentData = [
  {
    comment:'this is a comment',
    date_created:'September 22, 2021 22:00:00',
    post_id:1,
    user_id:1
  },
  {
    comment:'this is a comment',
    date_created:'September 23, 2021 22:00:00',
    post_id:2,
    user_id:1
  },
  {
    comment:'this is a comment',
    date_created:'September 23, 2021 22:00:00',
    post_id:1,
    user_id:2
  },

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
