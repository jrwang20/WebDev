var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blog_demo", {useNewUrlParser: true});

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
})

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [postSchema]
})

var User = mongoose.model("User", userSchema);




var newUser = new User({
    email: "charlie@brown.edu",
    name: "Charlie Brown"
})

newUser.save(function(err, user) {
    if(err) {
        console.log(err);
    } else {
        console.log(user);
    }
});

var newPost = new Post({
    title: "Relections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
})