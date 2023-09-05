import express from "express";

const app=express();
const port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});
app.get("/login",(req,res)=>{
    res.render("login.ejs");
});
app.get("/project-dash",(req,res)=>{
    res.render("project-dash.ejs");
});
app.get("/task-dash",(req,res)=>{
    res.render("task-dash.ejs");
});
 

app.listen(port,()=>{
    console.log("server is started at port")
});