var mongoose = require('mongoose');
var Character = mongoose.model('Character');

exports.list_all_characters = function(req,res){
    Character.find({}, function(err,char){
        if(err)
            res.send(err);
        res.json(char);
    });
};

exports.get_a_character = function(req,res){
    Character.findById(req.params.characterId, function(err,char){
        if(err)
            res.send(err);
        
        res.json(char);
    });
};

