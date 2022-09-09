const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paymentMethod: {
        type: DataTypes.ENUM("paypal", "mercadopago"),
        allowNull: false
    },
    state:{
        type: DataTypes.ENUM("paid", "unpaid")
    },
    date : {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    }
  }, {timestamps: false});
};