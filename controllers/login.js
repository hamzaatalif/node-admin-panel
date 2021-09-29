require("dotenv").config();
const path = require("path");
const jwt = require("jsonwebtoken");

import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseApp = require("../db/connect");

const db = getFirestore();

const getLogin = (req, res) => {
    return res.sendFile(path.join(__dirname,"../public/login.html"))
}

const postLogin = async (req, res) => {
    const userInput = req.body.adminPass;
    const querySnapshot = await getDocs(collection(db, "admins"));
    const adminPass = querySnapshot.docs.map((doc) => {
        return doc.data().pass;
    });
    adminPass.toString();
    if (userInput == adminPass) {
        return res.redirect("/")
    }
    return res.redirect("/login")
}

module.exports = {
    getLogin,
    postLogin
}