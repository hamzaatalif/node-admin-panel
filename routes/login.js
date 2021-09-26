const express = require("express");
const loginRouter = express.Router();
const {getLogin,postLogin} = require("../controllers/login");

loginRouter.route("/").get(getLogin).post(postLogin);

module.exports = loginRouter;