import express from "express"
// index.js
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app=express()
app.get('/',(req,res)=>{
    res.send("Home")
})
app.listen(port,()=>{
    console.log(`port  ${port}`)
})
const list=[
    {
        id : 1,
        name:'alkamist',
        price:150,
    },
    {
        id : 2,
        name:'ugly love',
        price:180,
    }
]
app.get('/api/books',(req,res)=>{
    res.send(list)
})