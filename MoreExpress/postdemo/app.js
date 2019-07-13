var express = require("express");  //引入
var app = express();  //执行
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extend: true}));//take the request body and transfer it to JS object

app.set("view engine", "ejs");  //设置view engine

var friends = ["1", "2", "3", "4", "5"];

//各种routes

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/friends", function(req, res) {
    
    res.render("friends", {friends: friends});
})

app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    console.log(req.body);
    res.render("friends", {friends: friends});
})

app.listen(process.env.PORT, process.env.IP, function() {  //让express server开始监听
    console.log("Server started!");
})