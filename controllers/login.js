require("dotenv").config();
const path = require("path");
const jwt = require("jsonwebtoken");

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseApp = require("../db/connect");

const db = getFirestore();

const getLogin = (req, res) => {
    return res.sendFile(path.join(__dirname, "../public/login.html"))
}

const auth = getAuth();

const postLogin = async (req, res) => {

    signInWithEmailAndPassword(auth, req.body.adminEmail, req.body.adminPass)
        .then((userCredential) => {
            // Signed in 
            return res.redirect("/")
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            return res.redirect("/login")
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    // const userInput = req.body.adminPass;
    // const querySnapshot = await getDocs(collection(db, "admins"));
    // const adminPass = querySnapshot.docs.map((doc) => {
    //     return doc.data().pass;
    // });
    // adminPass.toString();
    // if (userInput == adminPass) {
    //     return res.redirect("/")
    // }
    // return res.redirect("/login")
}

module.exports = {
    getLogin,
    postLogin
}