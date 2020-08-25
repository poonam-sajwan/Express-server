const express=require("express");
const app=express();






app.get("/",(req,res)=>{
  res.send("This is home");
});

app.get("/about",(req,res)=>{
  res.send("Aboutttt");
});



app.listen(3000,()=>{console.log("Server is listening!")});
