require("dotenv").config();
const path = require("path");

const getLogin = (req,res) => {
    return res.sendFile(path.join(__dirname,"../public/login.html"));
}

const postLogin = (req,res) => {
    if (req.body.adminPass == process.env.admin_pass) {
        return res.send("<h1>SUCCESS!</h1>")
    }
    else {
        return res.sendFile(path.join(__dirname,"../public/login.html"));
    }
}

module.exports = {
    getLogin,
    postLogin
}