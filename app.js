const http = require('http');

const express = require('express')
const app = express();

app.use('/',(req,res,next)=>{
console.log("<h1> i am alway run</h1>")
next()
})

app.use('/add-product',(req,res,next)=>{
    console.log('<h1>Product page</h1>')
   res.send('product page')
})



const server = http.createServer(app);

server.listen(9009);