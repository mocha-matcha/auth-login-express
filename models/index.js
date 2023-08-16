const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});


Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});



Post.belongsTo(Comment, {
  foreignKey: 'post_id'
})



// Post.belongsTo(User, {
//   // as: 'author',
//   foreignKey: 'user_id',
//   onDelete:'CASCADE'
// })

// Post.hasMany(Comment, {
//   // as: 'comments',
//   foreignKey: 'post_id',
//   onDelete:'CASCADE'

// })

// Comment.belongsTo(Post, {
//   // as: 'posts',
//   foreignKey: 'post_id',
//   onDelete:'CASCADE'

// })

// User.hasMany(Post, {
//   // as: 'posts',
//   foreignKey: 'user_id',
//   onDelete:'CASCADE'

// })



module.exports = { Post, Comment, User };
