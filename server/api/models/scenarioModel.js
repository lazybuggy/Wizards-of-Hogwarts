var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScenarioSchema = new Schema({
    id: {
        type: Number,
        required: "Scenario id required"
    },
    chapter: {
        type: Number,
        required: "Chapter number required"
    },
    question: {
        type: String,
        required: "Scenario to pose to the user is required"
    }
});

module.exports = mongoose.model('Scenario',ScenarioSchema,'scenarios');