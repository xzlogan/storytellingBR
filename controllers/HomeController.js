const express = require("express");
const router = express.Router()
 


router.get("/home",(req, res) => {
    res.render("home");
});

// fake
router.get("/home2",(req, res) => {
    res.send("Aqui e uma Rota da Pagina Inicial!!");
});

module.exports = router;