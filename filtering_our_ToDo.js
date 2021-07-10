const express=require('express')
const fs=require('fs')
const app= express()
  
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/todos',(req,res)=>{
    const showPending=req.query.showpending

    fs.readFile('./store/todos.json','utf-8',(err,data)=>{
     if(err)
     {
         return res.status(500).send('Sorry,Something went wrong.')
     }
     const todos=JSON.parse(data)
     if(showPending!=="1")
     { 
        return res.json({todos:todos})
     }
     else
     {
     return res.json({todos:todos.filter(t=>{
            return t.complete===false})
        })
     }
    })
})

app.listen(80,()=>{
    console.log("<<<SERVER HAS STARTED SUCCESSFULLY>>>")
})

