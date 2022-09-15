const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    },
    city: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    postalCode: {
      type: DataTypes.STRING
    },
    telephone_number: {
      type: DataTypes.STRING,
    },
    status:{
      type: DataTypes.ENUM("active","block"),
      defaultValue: "active"
    },
    show:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    gender:{
      type:DataTypes.ENUM("male","female", "other"),
      
    },
    birthday:{
      type: DataTypes.STRING,
  
    }
  }, {
    timestamps: false,
  });
};
