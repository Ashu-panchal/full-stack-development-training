// import express package
const express = require('express');
// initallize app with express function
const app = express();
//  define port
const port = 3000;
/*
API Section
 */
app.listen(port,()=>{
    console.log(`my api is started at ${port}`)
})