/*navigate to home page*/
module.exports = function(application) {
    application.get('/', function(request, response) {
        response.render('Main');
    });
};