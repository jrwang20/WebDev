#YelpCamp

* Add Landing Page
* Add Campground Page that lists all campgrounds

Each Campground has:
* Name
* Image

[
    {name: "Salmon Creek", image: "http://www.image.com"}
]

#Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

#Creating New Campground
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model!
* Make our errors go away
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish Styleing Show Page
* Add public directory
* Add custom stylesheet

#Add User Model I
* Install all packages needed for auth
* Define User Model

#Add User Model II
* Configure Passport
* Add register routes
* Add register template

#Add User Model III
* Add login routes
* Add login template

#Add User Model IV
* Add logout routes
* Prevent user from adding a comment if not signed in
* Add links to navbar

#Add User Model V
* Show/hide auth links correctly

#Refactor The Routes
* Use Express router to reoragnize all routes

#Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

