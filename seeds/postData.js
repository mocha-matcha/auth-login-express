const { Post } = require('../models');

const postdata = [
  {
    "title":'title',
    "content":'this is content',
    "date_created":'September 23, 2021 22:00:00',
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
