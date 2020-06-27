const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("dotenv").config();

const PORT = process.env.PORT || 9090

const routes = require("./controllers/burgers_controller.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("server listening on PORT " + PORT);
});

app.use("/", routes);

// work on connection.js connection to database(to mysql) connect connection.js to server.js   