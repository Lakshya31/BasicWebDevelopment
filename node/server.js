const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.post("/",(req,res)=>{
    recieved = req.body;
    console.log(recieved)
    if(recieved !== undefined){
        res.send("Hello Root!");
    }
    
})


app.listen(3000);