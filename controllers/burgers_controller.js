const router = require("express").Router();
const burger = require('../config/orm');

router.get("/", (req, res) => {
    burger.selectAll(function (burgerData) {
        console.log(burgerData);
        res.render("index", { data: burgerData });
    })
});

router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/');
    })
})
router.post('/burger/devour', function (req, res) {
    burger.insertOne(req.body.id, function () {
        res.redirect('/');
    })
})

module.exports = router; 