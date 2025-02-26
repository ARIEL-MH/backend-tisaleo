const express = require("express");
const { createActivity, getActivitiesBySessionId } = require("../controllers/activityController");

const router = express.Router();

router.post("/", createActivity);
router.get("/user/:sessionId", getActivitiesBySessionId);

module.exports = router;
