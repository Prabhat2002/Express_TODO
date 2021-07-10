const express=require('express')
const fs=require('fs')
const app= express()
  
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/todos',(req,res)=>{
  fs.readFile('./store/todos.json','utf-8',(err,data)=>{
   if(err)
   {
       return res.status(500).send('Sorry,Something went wrong.')
   }
   const todo=JSON.parse(data)
   return res.json({todos:todo})
})
})

app.listen(80,()=>{
    console.log("<<<SERVER HAS STARTED SUCCESSFULLY>>>")
})

