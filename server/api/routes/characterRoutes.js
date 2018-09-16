module.exports = function(app){
    var characterController = require('../controllers/characterController');

    app.route('/characters')
        .get(characterController.list_all_characters);
        
    app.route('/characters/:characterId')
        .get(characterController.get_a_character);
};