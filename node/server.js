var express = require('express');

var app = express();

app.get("/",(req,res)=>{
    console.log("Hello Root!")
})

app.get("/profile",(req,res)=>{
    console.log("Hello Profile!")
})

app.listen(3000);