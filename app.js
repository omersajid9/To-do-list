const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const ejs = require("ejs");

var names = [];
var exit = [];

// app.use('view-engine', 'ejs');

//app.use(express.static("public"))

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: "true"}));

// app.use()
var d = "";


app.post("/", (req, res)=>{

  var name = req.body.input;
  // req.body.list.innerHtml = "<h1>" + name + "</h1>";

  console.log(req.body);
  if(req.body.list === "add"){
    console.log(name);
    names.push(name);
    console.log(names);
    res.redirect("/");
  }
  else if(req.body.list === "remove"){
    var name = req.body.input2;
    console.log(names);

    var myIndex = names.indexOf(name);
    if(myIndex != -1){
      exit.push(names.splice(myIndex, 1));
    }

    console.log(name);
    res.redirect("/");
  }




});

app.get("/", (req, res)=>{
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var text = today.toLocaleString("en-US", options);
  d = text;

  console.log(names);
  res.render("list", {foo: text, something: names, something2: exit});

});

app.listen(3000, ()=>{
  console.log("Server launched1");
});
