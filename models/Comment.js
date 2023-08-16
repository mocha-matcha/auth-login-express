const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    comment: {
      type: DataTypes.STRING,
    },
    date_created: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_id:
      {
        type: DataTypes.INTEGER,
        allowNull: false,

        references:{model:'users',key:'id'}
      },
      post_id:
      {
        type: DataTypes.INTEGER,
        allowNull: false,

        references:{model:'posts',key:'id'}
      }

  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,

    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comment;
