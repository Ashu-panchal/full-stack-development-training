import express from 'express';
import connectToDatabase from './db.js';


const app = express();


const port = 3000;

app.use(express.json());

let db;

app.listen(port ,async ()=>{
    console.log(`Server started at port ${[port]}`)
    db = await connectToDatabase('todo-db')

})



app.post('/create-todo',async (request,response)=>{
     try{
            let task = request.body
    console.log(`Request recieved at ${JSON.stringify(task)}`);
    await db.Collection('tasks').insertOne(task)
    response.status(201).json({
     msg : "Task created successfully"
    })
     } catch(error){
          response.status(500).json({
               error : error.message
          })
     }
   
})



app.get('/read-all-todo',(request,response)=>{
   try{
     let AllTasks = db.Collection('tasks').find()
     response.status(200).json(AllTasks)
   } catch(error){
      response.status(500).json({
               error : error.message
          })
    }

})





app.get('/read todo',async (request,response)=>{
  try{
  let Todo = req.query.id;
  let result = await db.Collection('tasks').findOne(Todo)
   if (result == null) {
            res.status(404).json({ msg: 'Task not found' })
        }
        res.status(200).json(result);
    }catch(error){
     res.status(500).json({
               error : error.message
          })
    }
})



app.patch('/update-todo',async (request,response)=>{

     let Todo = req.query.id;
     let newTodo = req.body
     let result = await db.Collection('tasks').updateOne({id : Todo}, {$set : newTodo})
      if (result.matchedCount == 0) {
        return res.status(404).json({ msg: 'Task not found' });
    }

    res.status(201).json({ msg: 'Task updated successfully' });

})




app.delete('/delete-todo',async (request,response)=>{
     let Todo = req.query.id;
    let result = await db.collection('tasks').deleteOne({ id : Todo})
    if (result.deletedCount == 0) {
        res.status(404).json({ msg: 'Task not found' })
    }
    res.status(201).json({ msg: 'Task deleted successfully' })
})