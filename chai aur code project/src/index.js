import mongoose from "mongoose";
import {DB_NAME}from "./constent.js"
import dotenv from "dotenv"
// require('dotenv').config({path:'./env'})
import connectDB from "../db/db.js";


dotenv.config({
    path:'./env'
})

connectDB()







/*
import express from "express";
const app=express()

(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",()=>{
        console.log(error)
        throw error
       })


       app.listen(process.env.PORT,()=>{
        console.log("app listening");
       })
    }catch(error){
        console.error("Error",error)
        throw err
    }
})()*/