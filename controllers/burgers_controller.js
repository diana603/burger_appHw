const router = require("express").Router();
const burger = require('../config/orm');

router.get("/burgers", (req, res) => {
    burger.selectAll(function (burgerData) {
        console.log(burgerData);
        res.render("index", { data: burgerData });

    })

});// this function is not doing what i wan it to.    



router.get("/", (req, res) => {
    console.log("it works");
});

module.exports = router; 