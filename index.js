const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

const coursesName= require('./data/courseCategoryName.json')
const courseById= require('./data/coursesDetails.json')

app.get('/',(req,res) =>{
    res.send('api is created')
})

app.get('/courseName',(req,res)=>{
    res.send(coursesName)
})
app.get('/courseName/:id',(req,res) =>{
    const  id= parseInt(req.params.id);
    console.log(req.params.category_id)
    const course = courseById.filter(c=>c.category_id==id)
  res.send(course)
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server running in ',port)
})