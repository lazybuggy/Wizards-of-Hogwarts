const mongoose = require('mongoose');

var password = process.env.DB_USER_PWD;
var uri = "mongodb+srv://lazybuggy:"+password+"@wizardcluster-idobw.mongodb.net/wizards-of-hogwarts-db?retryWrites=true";

mongoose.connect(uri).then(
    () => {
            console.log('Connected to MongoDB Atlas ! (: ');
        },
    (err) => {
            console.log('Error occured connecting to MongoDB Atlas ): ',err);
        }
);

//require models
require('./api/models/userModel');
require('./api/models/characterModel');
require('./api/models/scenarioModel');
require('./api/models/choiceModel');