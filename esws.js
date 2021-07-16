const express=require("express");
const path=require("path");
const app=express();
console.log(__dirname);
// console.log(path.join(__dirname,"../public"));
const staticpath=path.join(__dirname,"../public");

//builtin-middleware
app.use(express.static(staticpath));

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
 console.log("server is running..")
})