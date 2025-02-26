const Activity = require("../models/Activity");
const User = require("../models/User");

exports.createActivity = async (req, res) => {
  try {
    const { title, address, description, sessionId } = req.body;

    if (!title || !address || !description || !sessionId) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    // Verificar que el usuario con ese sessionId existe
    const user = await User.findOne({ where: { sessionId } });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Crear la actividad asociada al sessionId
    const activity = await Activity.create({
      title,
      address,
      description,
      sessionId,
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getActivitiesBySessionId = async (req, res) => {
  try {
    const { sessionId } = req.params;

    // Buscar todas las actividades que correspondan al sessionId
    const activities = await Activity.findAll({ where: { sessionId } });

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
