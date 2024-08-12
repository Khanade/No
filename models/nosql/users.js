const mongoose = require("mongoose")

const userScheme = new mongoose.Schema({
    name: {
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String
    },
    role:{
        type:["user","admin"],
        default:"user",
    }

},
{
    //Campos para crear marcas de tiempo
    timestamps:true, //createAt,updateAt
    versionKey:false
}

);

module.exports = mongoose.model("users", userScheme) //mongoose.model(nombre de colección, userScheme)

