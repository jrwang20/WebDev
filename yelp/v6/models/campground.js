var mongoose = require("mongoose");

// Schema and Model SetUp
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;