'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static createRoom = (name, code) => {
      return this.create({ room_name: name, room_code: code})
    }
  }
  Room.init({
    room_name: DataTypes.STRING,
    room_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};