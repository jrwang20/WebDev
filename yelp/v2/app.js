var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema and Model SetUp
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "山岸逢花", 
//     image: "https://jp.netcdn.space/digital/video/pred00153/pred00153pl.jpg",
//     description: "This is one of my favourite porn stars!"
// }, function(err, campground) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND:");
//         console.log(campground);
//     }
// })

// var campgrounds = [
//         {name: "山岸逢花", image: "https://jp.netcdn.space/digital/video/pred00153/pred00153pl.jpg"},
//         {name: "希崎杰西卡", image: "https://jp.netcdn.space/digital/video/ipx00325/ipx00325pl.jpg"},
//         {name: "波多野结衣", image: "https://jp.netcdn.space/digital/video/jux00595/jux00595pl.jpg"},
//         {name: "明日花绮罗", image: "https://jp.netcdn.space/digital/video/ssni00166/ssni00166pl.jpg"},
//         {name: "饭冈加奈子", image: "https://jp.netcdn.space/digital/video/49nitr00121/49nitr00121pl.jpg"},
//         {name: "通野未帆", image: "https://jp.netcdn.space/digital/video/juy00869/juy00869pl.jpg"}
//     ]

app.get("/", function(req, res) {
    res.render("landing");
})

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

//CREATE - add new campgrounds to database
app.post("/campgrounds", function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // create a new campground and save it to database
    Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
    
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        } else {
            //render show template with the campground
            res.render("show", {campground: foundCampground});
        }
    })
    
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started!");
})