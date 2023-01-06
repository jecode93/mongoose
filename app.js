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

//INSERT A DOCUMENT to the database
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});


//INSERTION OF MULTIPLES DOCUMENTS
const kiwi = Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
});

const orange = Fruit({
    name: "Orange",
    rating: 4,
    review: "The sour for me"
});

const banana = Fruit({
    name: "Banana",
    rating: 3,
    review: "Weird texture"
});

//COMMENT TO AVOID INSERTION OF THESE DOCUMMENT TO THE DATABASE
// Fruit.insertMany([kiwi, orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successfully saved all of the fruits to fruitsDB");
//     }
// });



// fruit.save(); // TO SAVE THE DATA TO THE DATABASE, IF NOT COMMENT IT WILL EXECUTE EVERYTIME WE RUN OUR APP.




//Challenge to create a new collection of people that have a schema of 2 fields "name" and "age".

const peopleSchema = mongoose.Schema({
    name: String,
    age: Number
});

const People = mongoose.model("People", peopleSchema);

//INSERTION OF ONE PEOPLE
const people = new People({
    name: "John",
    age: 30
});
// people.save();  // TO SAVE THE DATA TO THE DATABASE, IF NOT COMMENT IT WILL EXECUTE EVERYTIME WE RUN OUR APP.