const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

const sampleData= require('./data/sampleData.json')

app.get('/',(req,res) =>{
    res.send('api is created')
})

app.get('/sampleData',(req,res)=>{
    res.send(sampleData)
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server running in ',port)
})