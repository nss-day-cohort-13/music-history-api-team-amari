angular.module("Russell")
  .controller("Modal", function($scope, $http, $timeout, $uibModal, RootFactory, $uibModalInstance, songId) {

    $scope.songdetail = null;
    const errorHandle = (e) => console.log(e);

    RootFactory.getRoot()
      .then((root) => {
        return $http.get(`${root.songs}${songId}`);
      }, errorHandle)
      .then((songdetail) => {
        $scope.songdetail = songdetail.data;
        $timeout();
      });

    $scope.edit = function (url) {
      console.log("url", url );
      $uibModalInstance.close();
    };

    $scope.delete = function (url) {
      return $http.delete(`${url}`)
      .then(()=> {
        console.log("successfully deleted I think");
        $scope.$emit("reloadPagePlease");
      }, errorHandle)
      .then(()=> {
        $uibModalInstance.close();
      });
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss("cancel");
    };

  });
