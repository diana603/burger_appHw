const connection = require("connection.js");

const orm = {
    selectAll: function (tableInput, callback) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, response) => {
            if (err) throw err;
            callback(response);
        });
    },

    // insertOne() 
    // updateOne()
}

module.exports = orm; 
