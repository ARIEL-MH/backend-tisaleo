require("dotenv").config();
const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync({ force: false}); // ⚠️ Cambia a `force: true` si deseas reiniciar la DB en cada ejecución
    console.log("Base de datos sincronizada");

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

startServer();
