// server instantiation
const express = require('express');
const app = express();

// used to parse request.body in express put or post
const bodyParser = require('body-parser');

// specifically parse json data and add it to request.body object
app.use(bodyParser.json());

// run server on specific port
app.listen(3000,()=>{
    console.log('my first server listening on port 3000');
});

// routes
app.get('/',(request,response)=>{
    response.send('home page')
})

app.get('/about',(request,response)=>{
    response.send('about page')
})
app.post('/products',(request,response)=>{
    const {name,category} = request.body;
    console.log(name)
    console.log(category)
    response.send('products added');
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(()=> console.log('connection established'))
.catch((error)=> console.log('connection error: ' + error));