var express = require('express');
var cors = require('cors');
require('./database');

//model loading
var User = require('./api/models/userModel');
var Character = require('./api/models/characterModel');

var bodyParser = require('body-parser');

var app = express();
app.use(cors());

var port = process.env.PORT || '3001';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//import & register route
var userRoutes = require('./api/routes/userRoutes');
var characterRoutes = require('./api/routes/characterRoutes');
userRoutes(app);
characterRoutes(app);

app.listen(port);

console.log('RESTful API server started (: Now on: ' + port);

app.use(function(req,res){
  res.status(404).send({URL: req.originalUrl + ' not found ): sorry!'})
});

module.exports = app;
