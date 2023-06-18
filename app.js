const  express = require ("express");
const  bodyParser= require ("body-parser");
const getDate = require("./date");
const  date= require (__dirname+"/date.js");

const app = express();
let items = [] ;
let work_items = [] ;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.get ("/", function(req, res){
day=date.getDate();
res.render('list', {Date : day, add_here : items});

});

app.get("/work", function(req,res){
res.render('list',{Date: "Work" ,  add_here : work_items});
});

app.post("/", function(req, res){
    
    if(req.body.List==="Work"){
    work_items.push(req.body.new_item) ;
    items.push(req.body.new_item);
    res.redirect("/work");
    }else{
    items.push(req.body.new_item) ;
    res.redirect("/");
    }
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});