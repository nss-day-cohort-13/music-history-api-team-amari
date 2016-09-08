angular.module("Russell", ["ngRoute"])
  
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "Main",
        templateUrl: "app/main.html"
      });
  })

  .controller("Main", [
    "$scope",
    "$http", 
    "$timeout", 
    function($scope) {
      
      $scope.view = true;

    }]);
