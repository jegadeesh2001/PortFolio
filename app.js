const express=require("express");
const ejs=require("ejs");

const app=express();

app.use(express.static("public"));

app.set('view engine','ejs');

app.get("/",function(req,res){
res.render("home");

})



app.listen(process.env.PORT||3000,function(){
  console.log("Started");
})
