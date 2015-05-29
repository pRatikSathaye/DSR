(function() {
  var app = angular.module('dsr-login', []);

  app.controller('LoginController', function() {
    this.loginDetails = {};
    var that = this;
    this.login = function() {
      console.log('loginDetails ',that.loginDetails);
      if (that.loginDetails.email === 'admin@example.com' && that.loginDetails.password === 'admin') {
        return true;
      }
      console.log('ITS FALSE');
      return false;
    }
  });
})();