require("dotenv").config();

const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 9090

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, () => {
    console.log("server listening on PORT " + PORT);
});


// work on connection.js connection to database(to mysql) connect connection.js to server.js   