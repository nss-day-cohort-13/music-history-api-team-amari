angular.module("Russell")
  .controller("Modal", function($scope, $http, $timeout, $uibModal, RootFactory, $uibModalInstance, songId) {

    $scope.songdetail = null;
    const errorHandle = (e) => console.log(e);

    console.log("song id", songId );
    RootFactory.getRoot()
      .then((root) => {
        return $http.get(`${root.songs}${songId}`);
      }, errorHandle)
      .then((songdetail) => {
        $scope.songdetail = songdetail.data;
        $timeout();
      });

    // TODO: add an argument pass here for delete.
    $scope.ok = function () {
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss("cancel");
    };

  });
