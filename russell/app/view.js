angular.module("Russell")
  .controller("View", function($scope, $http, $timeout) {
    $scope.title="view page";

    $scope.songs = [];
    const errorHandle = (e) => console.log(e);

    // Populate song data.
    $http.get("http://localhost:8000")
      .then((root) => {
        return $http.get(`${root.data.songs}`);
      }, errorHandle)
      .then((songlist) => {
        $scope.songs = songlist.data;
        $timeout();
      }, errorHandle);

  });
