const express = require("express");
const api = require("./api.js");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname,"./public")));
app.get("/api/test/",(req,res)=>(res.send("test complete")));
app.listen(8080, "10.138.0.2", ()=>{console.log("Listening at IP 34.83.209.8 port 8080")});