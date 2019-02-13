module.exports = function(app){
    var scenarioController = require('../controllers/scenarioController');

    app.route('/scenarios')
        .get(scenarioController.list_all_scenarios);
        
    app.route('/scenarios/:scenario_id')
        .get(scenarioController.get_a_scenario);
};