'use strict';
const {
  Model
} = require('sequelize');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username 
      }

      const rahasia = 'Ini rahasia ga boleh disebar-sebar'
      
      const token = jwt.sign(payload, rahasia)
      return token
    }

    checkPassword = (password) => {
      return bcrypt.compareSync(password, this.password)
    }

    static authenticate = async({username, password}) => {
      try{
        const user = await this.findOne({ where: {username}})

        if(!user)
          return Promise.reject("user not found")

        const isPasswordValid = user.checkPassword(password)

        if(!isPasswordValid)
          return Promise.reject("user not found")
          
        return Promise.resolve(user)

      } catch(err){
        Promise.reject(err)
      }
    }

    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username
      }

      const rahasia = 'Ini rahasia ga boleh disebar-sebar'
      const token = jwt.sign(payload, rahasia)

      return token
    }

    static #encrypt(password) {
      return bcrypt.hashSync(password, 10)
    }

    static register = ({ username, password, role }) => {
      const encryptedPassword = this.#encrypt(password)

      return this.create({ username: username, password: encryptedPassword, role: role })
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};