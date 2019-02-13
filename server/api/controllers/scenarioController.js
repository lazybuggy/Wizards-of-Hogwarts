var mongoose = require('mongoose');
var Scenario = mongoose.model('Scenario');

exports.list_all_scenarios = function(req,res){
    Scenario.find({}, function(err,scenarios){
        if(err)
            res.send(err);
        res.json(scenarios);
    });
};

exports.get_a_scenario = function(req,res){
    var query = {id: req.params.scenario_id};
    Scenario.find(query, function(err,scenario){
        if(err)
            res.send(err);
        
        res.json(scenario);
    });
};

