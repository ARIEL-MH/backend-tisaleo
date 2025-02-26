const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Activity = sequelize.define("Activity", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, // Hace que el ID se incremente automáticamente
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sessionId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Users", // Hace referencia a la tabla de usuarios
      key: "sessionId",
    },
  },
});

module.exports = Activity;
