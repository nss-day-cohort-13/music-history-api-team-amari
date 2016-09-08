angular.module("Russell")
  .controller("View", function($scope, $http, $timeout, $uibModal, RootFactory) {

    $scope.songs = [];
    const errorHandle = (e) => console.log(e);

    // Populate data.
    RootFactory.getRoot()
      .then((root) => {
        $http.get(root.songs)
            .then((songlist) => {
                $scope.songs = songlist.data;
                $timeout();
            }, errorHandle);
        return root
      }, errorHandle)
      .then((root) => {
        $http.get(root.artists)
            .then((aristslist) => {
                $scope.artists = aristslist.data;
                $timeout();
            }, errorHandle);
            return root
        }, errorHandle)
      .then((root) => {
        $http.get(root.albums)
            .then((albumslist) => {
                $scope.albums = albumslist.data
                $timeout();
            }, errorHandle);
      })



    $scope.openModal = (songId) => {
      const modalInstance = $uibModal.open({
        size: "lg",
        templateUrl: "app/modal.html",
        controller: "Modal",
        resolve: {
          'songId': songId
        }//end of resolve
      });//end of modal.open
    };

  });
