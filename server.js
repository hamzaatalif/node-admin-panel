// host dependencies
require("dotenv").config();
const express = require("express");
// local dependencies
const loginRouter = require("./routes/login");
const dashboardRouter = require("./routes/dashboard");
const authUser = require("./middleware/auth");
// initializations
const app = express();
const PORT = process.env.PORT || 5000;
// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.static("./public"))
app.use("/", dashboardRouter);
app.use("/login", loginRouter);
app.use("/",authUser);



const run = async () => {
    try {
        app.listen(PORT, console.log(`Server is listening on port: ${PORT}...`))
    } catch (error) {
        console.error(error)
    }
}


run();