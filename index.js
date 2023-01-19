const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const UserModel=require("./Model/Usermodel")
const {connection} = require("./config/db")

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello")
})
app.post("/signup", async (req, res) => {
    const {email, password} = req.body;
    const userPresent = await UserModel.findOne({email})
    if(userPresent){
        res.send("Try loggin in, User already exist")
    }
    try{
        bcrypt.hash(password, 4, async function(err, hash) {
            const user = new UserModel({email,password:hash})
            await user.save()
            res.send("Sign up successfull")
        });
       
    }
   catch(err){
        console.log(err)
        res.send("Something went wrong, pls try again later")
   }
})

app.listen(8080, async () => {
    try{
        await connection;
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log("Listening on http://localhost:8080")
})