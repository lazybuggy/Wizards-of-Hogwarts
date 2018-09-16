module.exports = function(app){
    var userController = require('../controllers/userController');

    app.route('/users')
        .get(userController.list_all_users)
        .post(userController.create_a_user);
        
    app.route('/users/:userId')
        .get(userController.get_a_user)
        .put(userController.update_a_user);
};