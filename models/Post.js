const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      references:{model:User,key:'id'}

    }
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: true,

    underscored: true,
    // modelName: 'posts',
  }
);

module.exports = Post;
