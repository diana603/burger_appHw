const orm = require('../config/orm.js');

const burger = {

    selectAll: (callback) => {
        orm.selectAll((res) => {

            callback(res);
        });
    },

    insertOne: (burger_name, callback) => {
        orm.insertOne('burger_name', burger_name, function (res) {

            callback(res);

        });

    },

    updateOne: (burger_id, callback) => {
        orm.updateOne("devoured", true, burger_id, (res) => {

            callback(res)

        });
    }

}


module.exports = burger;