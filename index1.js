const express=require('express')
const fs=require('fs')
const app= express()
  
app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.put('/todos/:id/complete',(req,res)=>{
    const id=req.params.id//accept id value by user

    const findTodobyId= (todos,id)=>{
      for(let i=0;i<todos.length;i++)
      {
          if(todos[i].id==id)
          { 
            return i;
          }
      }
      return -1;
    }
    fs.readFile('./store/todos.json','utf-8',(err,data)=>{
        if(err)
        {
            return res.status(500).send('Sorry,Something went wrong.')
        }
        
        const todos=JSON.parse(data)
        const todoindex=findTodobyId(todos,id)
        if(todoindex==-1)
        {
            return res.status(404).send('Sorry , Something Wnent Wrong!!')
        }
        // return res.json(todos[todoindex])
        
        todos[todoindex].complete=true
        fs.writeFile('./store/todos.json',JSON.stringify(todos),()=>{
            return res.json({"status":"ok"})
        });

    })
})
app.listen(80,()=>{
    console.log("<<<SERVER HAS STARTED SUCCESSFULLY>>>")
})

