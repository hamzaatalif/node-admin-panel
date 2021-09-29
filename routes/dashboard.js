const express = require("express");
const dashboardRouter = express.Router();
const {getDashboard} = require("../controllers/dashboard")

dashboardRouter.route("/").get(getDashboard);

module.exports = dashboardRouter;