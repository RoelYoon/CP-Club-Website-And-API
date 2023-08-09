const express = require("express");
const path = require("path");
const baekjoon = require("./baekjoonAPI.js");
const solvedac = require("./solvedacAPI.js");

const app = express();
app.use(express.static(path.join(__dirname,"./public")));

app.get("/",(req,res)=>(res.sendFile(path.join(__dirname,"./index.html"))));
app.get("/api/baekjoon/*",async (req,res)=>(await baekjoon.apiCall(req,res)));
app.get("/api/solvedac/*",async (req,res)=>(await solvedac.apiCall(req,res)));
app.get('*',(req,res)=>{res.send("404 boiii").status(404);});

app.listen(8080, "10.138.0.2", ()=>{console.log("Listening at IP 34.83.209.8 port 8080")});