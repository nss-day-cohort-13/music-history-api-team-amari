angular.module("Russell")
  .controller("Modal", function($scope, $http, $timeout, $uibModal, RootFactory, $uibModalInstance, songId) {

    $scope.songdetail = null;
    const errorHandle = (e) => console.log(e);

    //TODO: load album and artist information here.
    RootFactory.getRoot()
      .then((root) => {
        return $http.get(`${root.songs}${songId}`);
      }, errorHandle)
      .then((songdetail) => {
        $scope.songdetail = songdetail.data;
        $timeout();
      });

    $scope.edit = function (url) {
      //open edit div. 
      //http.put the changes...
      console.log("url", url );
      $uibModalInstance.close();
    };

    $scope.delete = function (url) {
      //deletes selected song.
      return $http.delete(`${url}`)
      .then(()=> {
        $scope.$emit("reloadPagePlease");
      }, errorHandle)
      .then(()=> {
        $uibModalInstance.close();
      });
    };

    $scope.cancel = function () {
    //closes modal while doing nothing.
      $uibModalInstance.dismiss("cancel");
    };

  });
