(function() {
  var app = angular.module('dsr', ["dsr-login"]);

  app.controller('ProjectController', function() {
    this.projects = projects;
  });

  var projects = [{
    name: 'Kinvey DLC',
    technology: 'Javascript',
    plannedTask: 'Working on PS-174',
    actualTask: 'Completed PS-174'
  }, {
    name: 'NOU App',
    technology: 'iOS',
    plannedTask: 'Working on new UI',
    actualTask: 'Completed new UI'
  }]

})();
