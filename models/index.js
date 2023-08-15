const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

Post.belongsTo(User, {
  // as: 'author',
  foreignKey: 'user_id'
})

Post.hasMany(Comment, {
  // as: 'comments',
  foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
  // as: 'posts',
  foreignKey: 'post_id'
})

User.hasMany(Post, {
  // as: 'posts',
  foreignKey: 'user_id'
})



module.exports = { Post, Comment, User };
