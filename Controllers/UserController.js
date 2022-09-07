const express = require("express");
const router = express.Router();
const database = require("../database.json");

router.get("/user", (req, res) => {
    return res.send(database);
})

module.exports = router;