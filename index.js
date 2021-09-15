const express = require('express')
const app = express()
const mongoose = require('mongoose').set('debug',true)
const dotenv = require('dotenv')
dotenv.config()

// Database connetion
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
	console.log("Connected to database.")
}).catch((err)=>{
	console.log("Something went wrong.")
	console.log(err)
})


app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/public',express.static('public'))

const queryRoutes = require('./routes/query')
app.use('/add',queryRoutes)

app.get('/',(req,res)=> {
    try{
        res.render('home')
    }catch(err){
        console.log(err)
    }
})

app.get('/about',(req,res)=> {
    try{
        res.render('about')
    }catch(err){
        console.log(err)
    }
})

app.get('/contact',(req,res)=> {
    try{
        res.render('contact')
    }catch(err){
        console.log(err)
    }
})

app.get('/projects',(req,res)=> {
    try{
        res.render('projects')
    }catch(err){
        console.log(err)
    }
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server has started at https://localhost:${process.env.PORT}`)
})