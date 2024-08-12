const express = require("express")
const router = express.Router() //Manejador de rutas
const {getItems,getItem,createItem} = require ("../controllers/tracks")
//Se generará la ruta localhost/track con GET,POST,DELETE,PUT

router.get("/", getItem);
router.post("/", createItem);

module.exports = router