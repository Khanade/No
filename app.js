require("dotenv").config()
const express = require("express")
const cors = require ("cors")
const dbConnect = require ("./config/mongo")
const app = express()

app.use(cors());
app.use(express.json())

const port = process.env.PORT  || 3001;

//localhost/api/____
app.use("/api",require("./routes"))
/*app.use("/api",require("./routes/tracks"))
app.use("/api",require("./routes/users"))
app.use("/api",require("./routes/storage"))*/

app.listen(port, ()=> {
    console.log(`Listening for port: ${port}`);
})
dbConnect();
