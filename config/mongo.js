const mongoose = require("mongoose");


const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    if (!DB_URI) {
        console.error("***** DB_URI no está definido *****");
        return;
    }

    try {
        await mongoose.connect(DB_URI);
        console.log("==== Conexión Correcta ====");
    } catch (error) {
        console.error("***** Fallo de conexión *****", error);
    }
};

module.exports = dbConnect;



