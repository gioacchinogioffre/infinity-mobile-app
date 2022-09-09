const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('comic', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(1234),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(1234),
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pageCount:{
      type: DataTypes.INTEGER
    },
    rating : {
        type: DataTypes.STRING,
        defaultValue: "3"
    },
    image:{
        type: DataTypes.STRING(1234)
    },
    language:{
        type: DataTypes.STRING
    },
    numReviews:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    stock:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  }, {timestamps: false});
};