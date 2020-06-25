const router = require("express").Router();
const burger = require('../config/orm');

router.get("/burgers", (req, res) => {
    burger.selectAll(function (burgerData) {
        res.render("index", { data: burgerData });

    })

});