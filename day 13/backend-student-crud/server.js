
// const express = require('express') 
import express from 'express'

import connectToDatabase from './db.js';

const app = express();
const port = 3000;

app.use(express.json())

let db;

// start server
app.listen(port, async () => {
    console.log(`my server is running at ${port}`)
    db =  await connectToDatabase('students-db')

})


app.get('/test', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("api is working")
})


// API 1 create student
app.post('/insert-one-student',async (req, res) => {
    try{
         let info = req.body;
       console.log(`Request received at ${JSON.stringify(info)}`)
       await db.collection('detail').insertOne(info)
       res.status(201).json("Student Created Successfully")

    }catch(error){
        res.status(500).json({
            error:error.message
        })
    }
})




// API 2 Read all student
app.get('/read-many-student', async(req, res) => {
    try{
          let allInfo =  await db.collection('detail').find().toArray()
          res.status(200).json(allInfo)
    }catch(error){
         res.status(500).json({
            error:error.message
        })
    }
  })



// API 3 read single students
app.get('/read-single-student', async (req, res) => {
    try{
        let student = req.query.name;
        let result = await db.collection('Detail').findOne({'name' : student})
        if (result === null) {
           return  res.status(404).json("No data found")
        }

        res.status(200).json(result)
    }catch(error){
         res.status(500).json({
            error:error.message
        })
    }
})



// API 4 update student
app.patch('/update-student', async (req, res) => {
   let student = req.query.id;
   let newInfo = req.body;
   let result = await db.collection('Detail').updateOne({id:student},{$set : newInfo})
   if (result.matchedCount == 0){
     return res.status(404).json("Student not found")
   }
   res.status(201 ).json("Student updated successfully")
})



// API 5 delete student
app.delete('/delete-student',async (req, res) => {
   let name = req.query.name;
   let result = await db.collection('Detail').deleteOne(name)
   if (result.deletedCount == 0) {
        res.status(404).json({ msg: 'Student not found' })
    }
    res.status(201).json({ msg: 'Student deleted successfully' })

})