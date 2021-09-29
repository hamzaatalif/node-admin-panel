require("dotenv").config();
const path = require("path");
const jwt = require("jsonwebtoken");

const getLogin = (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/login.html"));
}

const postLogin = (req, res) => {
    return res.redirect("/")
}

module.exports = {
    getLogin,
    postLogin
}