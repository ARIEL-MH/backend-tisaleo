const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Activity = require("./Activity");

const User = sequelize.define("User", {
  sessionId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Relación 1:N -> Un usuario tiene muchas actividades referenciadas por sessionId
User.hasMany(Activity, { foreignKey: "sessionId", sourceKey: "sessionId" });
Activity.belongsTo(User, { foreignKey: "sessionId", targetKey: "sessionId" });

module.exports = User;
