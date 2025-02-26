const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const activityRoutes = require("./routes/activityRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/activities", activityRoutes);

module.exports = app;
