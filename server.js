// host dependencies
require("dotenv").config();
const express = require("express");
import { initializeApp } from "firebase/app";
// local dependencies
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");
// initializations
const app = express();
const PORT = process.env.PORT || 5000;
// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./public"))
app.use("/", dashboardRouter);
app.use("/login", loginRouter);
// config
const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
} = process.env;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
}

const run = async () => {
    try {
        const firebaseApp = await initializeApp(firebaseConfig);
        app.listen(PORT, console.log(`Server is listening on port: ${PORT}...`))
    } catch (error) {
        console.error(error)
    }
}


run();