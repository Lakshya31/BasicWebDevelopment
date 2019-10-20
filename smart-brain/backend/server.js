const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const bcrypt = require('bcrypt');

const database = {
    users : [
        {
            id : '123',
            name : "Lakshya",
            email : "ls@gmail.com",
            password : "secret",
            entries : 0,
            joined : new Date()
        },
        {
            id : '124',
            name : "Sally",
            email : "sally@gmail.com",
            entries : 0,
            joined : new Date()
        }
    ],
    login : [
        {
            id : '124',
            email : "sally@gmail.com",
            hash : "$2b$10$aKaEb.L9pxJKi8Ntn2v6xe5CRU4A0xaXrRz9oseAV5C75141/zEr6"
        }
    ]
}

app.use(bodyParser.json());
app.use(cors());

app.get("/",(req,res) => {
    res.json(database.users);
})

app.post("/signin",(req,res) => {

    // bcrypt.compare(req.body.password, database.users[0].hash, function(err, res) {
    //     console.log(res)
    // });
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password){
        res.json(database.users[0])
    }
    else{
        res.status(400).json("Error Logging In")
    }
})

app.post("/register",(req,res) => {
    
    // bcrypt.hash(req.body.password, 10, function(err, hash) {
    //     if(!err){
    //         hashed = hash;
    //     }
    //     else{
    //         throw err;
    //     }
    //   });

    database.users.push({
        id : '125',
        name : req.body.name,
        email : req.body.email,
        entries : 0,
        joined : new Date()
    })
    res.json(database.users[database.users.length-1]);
})

app.get("/profile/:id",(req,res)=>{
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id){
            found = true;
            return res.json(user);
        }
    })
    if(!found){
        res.status(404).json("No Such User");
    }
})

app.put("/image",(req,res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id){
            found = true;
            user.entries++;
            return res.json(user.entries);
        }
    })
    if(!found){
        res.status(404).json("No Such User");
    }
})

app.listen(3001,()=>{
    console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------")
    console.log("\nApp is Running on Port 3001...\n");
})
