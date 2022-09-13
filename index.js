const express=require("express");
const app=express();
const  exphbs =require("express-handlebars")
const hbs=require("hbs")
const port=process.env.PORT || 5000;
const path=require("path");
const dir=path.join(__dirname,"./Image")
const dir_P=path.join(__dirname,"./partials")
console.log(dir)

app.set("view engine","hbs")
hbs.registerPartials(dir_P)
app.use(express.static(dir))
app.get("/",(req,res)=>{
    res.render("index",{
        img:"./Image/umb.jpg"
    })
})
app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.status(404)
    res.render("404err",{err:"Oops! Page not Found!"})
})

app.listen(port,()=>{
    console.log("http://localhost:"+port)
})