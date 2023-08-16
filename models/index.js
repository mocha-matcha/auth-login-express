const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

Post.hasMany(Comment, {
  as: 'post_comments',
  foreignKey: 'post_id',
  targetKey: 'id',
});

Comment.belongsTo(Post, {
  as: 'comment_post',
  foreignKey: 'post_id',
  targetKey: 'id',
})




User.hasMany(Post, {
  as: 'user_posts',
  foreignKey: 'user_id',
  targetKey: 'id',
});

Post.belongsTo(User, {
  as: 'post_user',
  foreignKey: 'user_id',
  targetKey: 'id',
})


User.hasMany(Comment, {
  as: 'user_comments',
  foreignKey: 'user_id',
  targetKey: 'id',
});

Comment.belongsTo(User, {
  as: 'comment_user',
  foreignKey: 'user_id',
  targetKey: 'id',
})




// User.hasOne(Post, {
//   as: 'user',
//   foreignKey: 'user_id',
//   targetKey: 'id',
// });

// Post.belongsTo(User, {
//   as: 'user',
//   foreignKey: 'user_id',
//   targetKey: 'id',
// })





// orderDetails.belongsTo(models.Orders, {
//   foreignKey: 'specialOrderId',
//   targetKey: 'id',
//   as: 'Orders'
// });

// Post.belongsToMany(User,{through:{model:Comment,unique:false}})
// User.belongsToMany(Post,{through:{model:Comment,unique:false}})

// User.belongsToMany(Comment,{through:Comment,foreignKey:'user_id'});


// Post.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });


// Post.hasMany(Comment, {
//   foreignKey: 'post_id',
//   onDelete: 'CASCADE'
// });



// Post.belongsTo(Comment, {
//   foreignKey: 'post_id'
// })



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
