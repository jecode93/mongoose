const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

//DB Name
const database = "fruitsDB";

//Connection to database or create the database if not exist.
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/" + database, { useNewUrlParser: true });





//Create the Schema of the data model
const fruistSchema = new mongoose.Schema({
    name: {
        // This is to add a data validation

        type: String,
        // required: [true, "Please check your data entry, no name specified."]
    },
    rating: {
        // This is to add a data validation
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});





//Use the Schema and create the collection of the database with the singular name 
const Fruit = mongoose.model("Fruit", fruistSchema);





//INSERT A DOCUMENT to the database
const fruit = new Fruit({
    rating: 10,
    review: "Pretty solid as a fruit."
});
// fruit.save(); // TO SAVE THE DATA TO THE DATABASE, IF NOT COMMENT IT WILL EXECUTE EVERYTIME WE RUN OUR APP.





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


Fruit.insertMany([kiwi, orange, banana], function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all of the fruits to fruitsDB");
    }
});


// Add new fruit to our database.
const pineapple = Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Great fruit"
});

// pineapple.save() // To Save the pineapple fruit to our database.











//READING FROM OUR DATABASE WITH MONGOOSE
Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits);
        fruits.forEach(fruit => {
            console.log(fruit);
        });

        mongoose.connection.close(); // ALWAYS CLOSE THE CONNECTION OF THE DATABASE WHEN FINISHING THE LAST ACTION IN OUR APP
    }
});




//UPDATE DOCUMENT FROM OUR DATABASE WITH MONGOOSE
Fruit.updateOne(
    { _id: "63ba3629e0e14c9f36c2d9c3" }, //The _id of the document that we want to update.
    { name: "Peach" }, // The field of the document that we want to update.
    function (err) { // Callback to log any errors
        if (err) {
            console.log(err);
        } else {
            console.log("Succesfully updated the document");
        }
    });




//DELETE DOCUMENT FROM OUR DATABASE WITH MONGOOSE
Fruit.deleteOne(
    { _id: "63ba3b7204036eb00d7d8e98" }, //The _id of the document that we want to delete.
    function (err) { // Callback to log any errors
        if (err) {
            console.log(err);
        } else {
            console.log("Document delete successfully.");
            mongoose.connection.close();
        }
    }
);






//CHALLENGE - CHALLENGE - CHALLENGE

//Challenge to create a new collection of people that have a schema of 2 fields "name" and "age".

const peopleSchema = mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruistSchema
});

const People = mongoose.model("People", peopleSchema);

//INSERTION OF ONE PEOPLE
const people = new People({
    name: "Amy",
    age: 30,
    favoriteFruit: pineapple
});
// people.save();  // TO SAVE THE DATA TO THE DATABASE, IF NOT COMMENT IT WILL EXECUTE EVERYTIME WE RUN OUR APP.



//Challenge to update the people call John in our database and give him a favourite fruit.
People.updateOne({ _id: "63b89b65df324b4b67bc1d45" },
    { favoriteFruit: orange },
    function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sucessfully Updated.");
            mongoose.connection.close();
        }
    });