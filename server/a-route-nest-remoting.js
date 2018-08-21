module.exports = function(app) {
  var Route = app.models.Route;
  Route.nestRemoting('times');
};