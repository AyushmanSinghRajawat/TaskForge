import express from "express";
import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/taskforgeDB');
const projectSchema=new mongoose.Schema({
    name:String,
    key:Number,
    projectDescription:String,
    projectManager:String,
    projectPriority:String,
    projectTag:String,
    projectStartDate:String,
    projectEndDate:String,
    // task:taskSchema
});
const Project=mongoose.model('Project',projectSchema);


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
app.get("/project-dash", (req, res) => {
    Project.find()
        .then((found) => {
            if (found.length >0) {
                console.log(found);
                res.render("project-dash.ejs", { p: found}); // Make sure you are passing 'p' here
            } 
            else {
                console.log("No documents found.");
                res.render("project-dash.ejs", { p: [{name:"Sample project",projectDescription:"this is a description"}] });
                
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("An error occurred.");
        });
    // res.render("project-dash.ejs") 
});

app.post("/project-dash",(req,res)=>{
    console.log("yooo");
    const projectName=req.body.ProjectName;
    const projectkey=req.body.ProjectKey;
    const projectdescription=req.body.ProjectDescription;
    const projectmanager=req.body.ProjectManager;
    const projectpriority=req.body.ProjectPriority;
    const projecttags=req.body.ProjectTags;
    const projectstart=req.body.Projectstart;
    const projectend=req.body.Projectend;
    const project=new Project({name: projectName, 
        key: projectkey, 
        projectDescription: projectdescription,
        projectManager:projectmanager,
        projectPriority:projectpriority,
        projectTag: projecttags,
        projectStartDate: projectstart,
        projectEndDate: projectend 
    });
    // console.log(project); 
    project.save().then(()=>console.log("project saved")).catch((err)=>console.log(err));
    res.redirect("/project-dash");
})
app.get("/task-dash",(req,res)=>{
    res.render("task-dash.ejs");
});
 

app.listen(port,()=>{
    console.log("server is started at port")
});