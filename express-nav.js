const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello !! Welcome to My home Page.");
})

app.get("/about",(req,res)=>{
    res.send("Hello !! Welcome to My about Page.");
})
app.get("/contact",(req,res)=>{
    res.send("Hello !! Welcome to My contact Page.");
})

app.get("/service",(req,res)=>{
    res.send("Hello !! Welcome to My Service Page.");
})

app.listen(5000,(err)=>{
    console.log("Server is running....at Port-5000")
})