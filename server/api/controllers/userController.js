var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list_all_users = function(req,res){
    User.find({}, function(err,user){
        if(err)
            res.send(err);
        res.json(user);
    });
};

exports.create_a_user = function(req,res){
    var newUser = new User(req.body);
    newUser.save(function(err,user){
        if(err)
            res.send(err);

        res.json(user);
    });
};

exports.get_a_user = function(req,res){
    User.findById(req.params.userId, function(err,user){
        if(err)
            res.send(err);
        
        res.json(user);
    });
};

exports.update_a_user = function(req, res){
    User.findOneAndUpdate(
        {_id: req.params.userId},
        req.body,
        {new: true},
        function(err,user){
            if(err)
                res.send(err);

            res.json(user)
        });
};