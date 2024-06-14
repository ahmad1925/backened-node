import connectionDatabase from "./db/db.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})

connectionDatabase()
.then(()=>{
    app.on("errors",(error)=>{
        console.log("ERRR:", error);
        throw error
    })
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`server starting on port : ${process.env.PORT}`);
    })
})