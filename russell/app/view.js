angular.module("Russell")
  .controller("View", function($scope, $http, $timeout, $uibModal, $rootScope, RootFactory) {

    $scope.songs = [];
    const errorHandle = (e) => console.log(e);

    // Populate song data.
    $scope.loadPage = () => {
      RootFactory.getRoot()
        .then((root) => {
          return $http.get(`${root.songs}`);
        }, errorHandle)
        .then((songlist) => {
          $scope.songs = songlist.data;
          $timeout();
        }, errorHandle);
    };
    // Call populate song data on page load.
    $scope.loadPage();

    $scope.openModal = (songId) => {
      //opens a modal to view details of the song clicked.
      const modalInstance = $uibModal.open({
        size: "lg",
        templateUrl: "app/modal.html", 
        controller: "Modal",
        resolve: { 
          'songId': songId
        }  
      });
    }; 

    //fancy listener to reload the page when someone edits/deletes a song from the modal.
    $rootScope.$on("reloadPagePlease", () => { 
      $scope.loadPage();
    });

  });
