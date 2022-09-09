const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false
    },
    comment:{
        type:DataTypes.STRING(2000),
       
        
    }
  }, {timestamps: false});
};