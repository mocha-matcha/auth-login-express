const { Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
    },
    date_created: {
        type: DataTypes.DATE,
        // allowNull: false,
      },
      user_id:
      {
        type: DataTypes.INTEGER,
        // allowNull: false,

        references:{model:User,key:'id'}
      },
      post_id:
      {
        type: DataTypes.INTEGER,
        allowNull: false,

        references:{model:Post,key:'id'}
      }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,

    underscored: true,
    // modelName: 'comments',
  }
);

module.exports = Comment;
