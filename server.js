const express = require("express");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 9090

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("./public"));

app.listen(PORT, () => {
    console.log("server listening on PORT " + PORT);
});

// work on connection.js connection to database(to mysql) connect connection.js to server.js   