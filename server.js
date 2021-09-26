const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


const run = async () => {
    try {
        app.listen(PORT,console.log(`Server is listening on port: ${PORT}...`))
    } catch (error) {
        console.error(error)
    }
}


run();