const express = require ("express")
const router = express.Router()



router.get("/",(req,res)=>{
    const dataStorage = ["Hola","mundo"]
    res.send({dataStorage})
})


module.exports = router