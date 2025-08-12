const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// API section 
app.post('/insert-user',(request, response) =>
{
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.send('user inserted succesfully')
})


app.post('/insert-user-1', (request, response) => {
    console.log(`request receivced is  = ${JSON.stringify(request.body)}`)
    response.send(`${JSON.stringify(request.body)}`)
})


app.post('/insert-user-2', (request, response) => {
    console.log(`request receivced is  = ${JSON.stringify(request.body)}`)
    console.log(typeof request.body)
    response.json(request.body)
})


app.post('/insert-person', (request, response) => {
    console.log(`request receivced is  = ${JSON.stringify(request.body)}`)
    response.send(`Person name is ${request.body.personName}`)
})


app.post('/insert-person-1', (request, response) => {
    console.log(`request receivced is  = ${JSON.stringify(request.body)}`)
    response.json(request.body.address)
    
})


/*
path ='/insert-person
http method - post
request ={
"personName": "panipat",
"officeAddress": "gurugram"
}
*/ 

/*
path ='/insert-person-1
http method - post
request ={
"personName": "panipat",
"address":{
"officeAddress": "gurugram"
"homeAddress": "panipat"
}
}
*/ 

app.listen(port, () => {
    console.log("my backend server is started at port" + port)
})