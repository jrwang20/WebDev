var express = require("express");

var app = express();

//routes
app.get('/', function(req, res) {
    res.send("Hi there");
})

app.get('/bye', function(req, res) {
    res.send("Goodbye");
})

app.get('/cat', function(req, res) {
    res.send("MEOW");
})

app.get('/r/:subredditName/comments/:id/:title', function(req, res) {
    var subredditName = req.params.subredditName;
    res.send('Welcome to the' + subredditName.toUpperCase());
})

app.get('/r/:subredditName/', function(req, res) {
    var subredditName = req.params.subredditName;
    res.send('Welcome to the' + subredditName.toUpperCase());
})

app.get('*', function(req, res) {
    res.send("You are a Star");
})

//listen
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has Started!!!");
})