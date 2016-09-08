angular.module("Russell")
  .controller("View", function($scope, $http, $timeout, $uibModal, $rootScope, RootFactory) {

    $scope.songs = [];
    const errorHandle = (e) => console.log(e);

    // Populate song data.
    RootFactory.getRoot()
      .then((root) => {
        return $http.get(`${root.songs}`);
      }, errorHandle)
      .then((songlist) => {
        $scope.songs = songlist.data;
        $timeout();
      }, errorHandle);

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

  $rootScope.$on("reloadPagePlease", function(event) { 
    tree.currentTaxa.child_taxa.forEach(function(child) {
      if (child.name === value) {
        tree.selectedSubtaxa = child;
      }
    });
  });

  });
