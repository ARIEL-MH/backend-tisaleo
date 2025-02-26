const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { sessionId } = req.body;
    if (!sessionId) return res.status(400).json({ message: "sessionId requerido" });

    const user = await User.create({ sessionId });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
