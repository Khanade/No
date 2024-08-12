const express = require("express")
const router = express.Router()



router.get("/",(req,res)=>{
    const dataUsers = ["Hola","otro mundo"]
    res.send({dataUsers:dataUsers})
})

module.exports = router