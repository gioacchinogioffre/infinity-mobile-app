const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.ENUM("paypal", "mercadopago"),
        allowNull: false
    },
    state:{
        type: DataTypes.STRING,
        defaultValue:"pending"
    },
    date : {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    }
  }, {timestamps: false});
};