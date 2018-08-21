module.exports = function(app) {
  var Stop = app.models.Stop;
  Stop.nestRemoting('times');
};