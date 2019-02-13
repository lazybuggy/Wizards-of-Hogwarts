module.exports = function(app){
    var choiceController = require('../controllers/choiceController');

    app.route('/scenario-choices/:scenario_id')
        .get(choiceController.get_scenario_choices);
        
};