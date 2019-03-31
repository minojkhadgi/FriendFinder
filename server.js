var express = require("express");
var path = require("path");

var bodyParser=require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
//expose the public directory to access css files...
app.use(express.static(__dirname +"/app/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
app.post("/api/surveys",function(req,res){
console.log("hi")
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  