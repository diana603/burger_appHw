const mysql = require('mysql');
require("dotenv").config();
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log('db connected');
});

module.exports = connection;             