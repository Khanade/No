const mongoose = require("mongoose")

const storageScheme = new mongoose.Schema({
    url: {
        type:String
    },
    filename:{
        type:String
    },
},
{
    //Campos para crear marcas de tiempo
    timestamps:true, //createAt,updateAt
    versionKey:false
}

);

module.exports = mongoose.model("storage", storageScheme) //mongoose.model(nombre de colección, userScheme)
