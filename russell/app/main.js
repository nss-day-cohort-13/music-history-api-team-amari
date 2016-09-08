angular.module("Russell", ["ngRoute", "ui.bootstrap"])
  
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "Main",
        templateUrl: "app/main.html"
      });
  })

  .factory("RootFactory", ($http) => {

    const httpget = $http.get("http://localhost:8000");

    return {
      getRoot: () => {
        return httpget.then(res => res.data); 
      }
    };
  })

  .controller("Main", [
    "$scope",
    "$http", 
    "$timeout", 
    function($scope) {
      
      $scope.view = true;

    }]);
