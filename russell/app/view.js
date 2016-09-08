angular.module("Russell")
  .controller("View", function($scope, $http, $timeout, $uibModal, $rootScope, RootFactory) {

    $scope.songs = [];
    const errorHandle = (e) => console.log(e);

    // Populate song data.
    $scope.loadPage = () => {
      RootFactory.getRoot()
        .then((root) => {
          $http.get(root.songs)
              .then((songlist) => {
                $scope.songs = songlist.data;
                $timeout();
              }, errorHandle);
          return root;
        }, errorHandle)
        .then((root) => {
          $http.get(root.artists)
              .then((aristslist) => {
                $scope.artists = aristslist.data;
                $timeout();
              }, errorHandle);
          return root;
        }, errorHandle)
        .then((root) => {
          $http.get(root.albums)
              .then((albumslist) => {
                $scope.albums = albumslist.data;
                $timeout();
              }, errorHandle);
        });
    };
   // Call populate song data on page load.
    $scope.loadPage();

    $scope.openModal = (songId) => {
      //opens a modal to view details of the song clicked.
      const modalInstance = $uibModal.open({
        size: "lg",
        templateUrl: "app/modal.html",
        controller: "Modal",

        controllerAs: "modal",
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
