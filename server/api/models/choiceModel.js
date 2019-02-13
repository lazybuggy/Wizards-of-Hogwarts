var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChoiceSchema = new Schema({
    scenario_id: {
        type: Number,
        required: "Scenario id required"
    },
    next_scenario_id: {
        type: Number,
        required: "Scenario this directs to is required"
    },
    answer: {
        type: String,
        required: "Choice to pose to the user is required"
    }
});

module.exports = mongoose.model('Choice',ChoiceSchema,'choices');