var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "山岸逢花", image: "https://jp.netcdn.space/digital/video/pred00153/pred00153pl.jpg"},
        {name: "希崎杰西卡", image: "https://jp.netcdn.space/digital/video/ipx00325/ipx00325pl.jpg"},
        {name: "波多野结衣", image: "https://jp.netcdn.space/digital/video/jux00595/jux00595pl.jpg"},
        {name: "明日花绮罗", image: "https://jp.netcdn.space/digital/video/ssni00166/ssni00166pl.jpg"},
        {name: "饭冈加奈子", image: "https://jp.netcdn.space/digital/video/49nitr00121/49nitr00121pl.jpg"},
        {name: "通野未帆", image: "https://jp.netcdn.space/digital/video/juy00869/juy00869pl.jpg"}
    ]

app.get("/", function(req, res) {
    res.render("landing");
})

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started!");
})