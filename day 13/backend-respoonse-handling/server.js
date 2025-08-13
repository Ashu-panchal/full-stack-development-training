// import express package
import express from 'express'

// create app variable
const app = express()

//  define port number
const port = 3000

// define request parising
app.use(express.json())

// API section start
app.get('/test', (req, res) => {
    res.send("API is up!")
})



//  status code handling
app.get('/read-user', (req, res) => {
    //fetching user from database 

    // let user = null
    let user ={
        "name": "Ashu",
        "age": 26
    }
    if (user==null)
    res.status(400).send("data not found")
else
    res.status(200).json(user)
})


// API section end

// start server
app.listen(port, ()=> {
    console.log(`server started at port ${port}`)
})