var mongoose = require('mongoose');
var Choice = mongoose.model('Choice');

exports.get_scenario_choices = function(req,res){
    var query = {scenario_id: req.params.scenario_id};
    Choice.find(query, function(err,choices){
        if(err)
            res.send(err);
        res.json(choices);
    });
};


