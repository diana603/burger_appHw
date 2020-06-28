const connection = require("./connection.js");

const orm = {
    selectAll: (callback) => {
        const queryString = `SELECT * FROM burgers;`;
        connection.query(queryString, (err, response) => {
            if (err) throw err;
            callback(response);
        });
    },

    insertOne: (burger_name, value, callback) => {
        console.log(burger_name, value);
        connection.query('INSERT INTO burgers (??,??) VALUES (?,?)', [burger_name, "devoured", value, false], (err, result) => {
            if (err) throw err;
            callback(result);
        });

    },
    updateOne: (devoured, value, burger_id, callback) => {
        connection.query('UPDATE burgers SET ?? = ? WHERE id = ?', [devoured, value, burger_id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
}

module.exports = orm; 
