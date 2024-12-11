const express= require('express')
const app=express()
app.use((req,res,next)=>{
    if(100<200)next()
})
app.get('/home', (req, res)=>{
    res.send('Every thing in my mind')
})
app.get('/about', (req, res)=>{
    res.send('The End')
})
app.get('/user/:1211', (req, res)=>{
    res.send('User ID')
})
app.listen(5050,()=>{
    console.log("Server listening on")
})