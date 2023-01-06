const mongoose = require("mongoose");

//DB Name
const database = "fruitsDB";

//Connection to database or create the database if not exist.
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/" + database, { useNewUrlParser: true });

//Create the Schema of the data model
const fruistSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

//Use the Schema and create the collection of the database with the singular name 
const Fruit = mongoose.model("Fruit", fruistSchema);

//INSERT the data to the database
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});
// fruit.save();

