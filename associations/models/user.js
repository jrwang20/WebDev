var

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [postSchema]
})

var User = mongoose.model("User", userSchema);