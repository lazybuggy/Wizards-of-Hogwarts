const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;

var password = 'LACJ0YRO123';//process.env.DB_USER_PWD;
var uri = "mongodb+srv://lazybuggy:"+password+"@wizardcluster-idobw.mongodb.net/wizards-of-hogwarts-db?retryWrites=true";

mongoose.connect(uri).then(
    () => {
            console.log('Connected to MongoDB Atlas ! (: ');
        },
    (err) => {
            console.log('Error occured connecting to MongoDB Atlas ): ',err);
        }
);

// MongoClient.connect(uri, function(err,client){
//     if(err){
//         console.log('Error occured connecting to MongoDB Atlas ): ',err);
//     }
//     console.log('Connected to MongoDB Atlas ! (: ');
//    // const collection = client.db("wizards-of-hogwarts").collection("characters");
// });

//require models
require('./api/models/userModel');
require('./api/models/characterModel');