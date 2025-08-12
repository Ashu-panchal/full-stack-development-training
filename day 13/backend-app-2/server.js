// import express package
const express = require('express');
// initallize app with express function
const app = express();
//  define port
const port = 3000;
/*
API method 1
http method = get
url = '/api-1'
request={}
response = 'this is our first api'
 */
app.get('/api-1',(request, response)=>
{
    response.send("This is our first api")
})
app,get('/test-api',(request, response)=>
{
    response.send("You get is . Great job!")
})
app.get('/test-api-3',(request,response)=>
{
    response.send("My test api third is working properly")
})
app.get('/homepage-admin',(request,response)=>{
    console.log(`content of server is ${request}`)
    response.send("this is website homepage")
})
/*
API method 2
http method = post
url = '/insert-user'
request={}
response = 'user inserted successfully'
 */
app.post('/insert-user',(request,response)=>{
    response.send("user inserted successfully")
})

app.listen(port,()=>{
    console.log(`my api is started at ${port}`)
})