var path =require("path");
module.exports=funtion(app){
app.use("/",function(req,res){
    res.sendFile(path.join(__dirname,"../pubic/home.html"));
    
});
app.get("/survey",function (req,res){
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});
};