'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    mobile: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
    invite:{
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};