const express = require("express");
const path = require("path");
const baekjoon = require("./baekjoonAPI/bojAPI.js");
const solvedac = require("./baekjoonAPI/solvedacAPI.js");
const problem = require("./baekjoonAPI/problemAPI.js")

const app = express();
app.use(express.static(path.join(__dirname,"./public")));

app.get("/",
async (req,res)=>{
    await res.sendFile(path.resolve(__dirname,"./public/index.html"))
})

app.get("/api/baekjoon/boj/:action/:user_name",
async (req,res)=>{
    await baekjoon.apiCall(req,res);
});

app.get("/api/baekjoon/problem/:action/:id",
async (req,res)=>{
    await problem.apiCall(req,res);
});

app.get("/api/baekjoon/solvedac/:action/:user_name",
async (req,res)=>{
    await solvedac.apiCall(req,res);
});

app.all('*',(req,res)=>{
    res.send("<h1>404 boiii</h1>").status(404);
});

app.listen(8080, "10.138.0.2", ()=>{console.log("Listening at IP 34.83.209.8 port 8080")});