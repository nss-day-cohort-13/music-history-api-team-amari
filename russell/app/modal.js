angular.module("Russell")
  .controller("Modal", function($scope, $http, $timeout, $uibModal, RootFactory, $uibModalInstance, songId) {
    const modal = this;

    modal.root = null;

    modal.songdetail = null;

    modal.albums = null;
    
    modal.artists = null;


    const errorHandle = (e) => console.log(e);

    RootFactory.getRoot()
      .then((root) => {
        modal.root = root;
        return $http.get(`${modal.root.songs}${songId}`);
      }, errorHandle)
      .then((songdetail) => {
        modal.songdetail = songdetail.data;
        console.log("modal song detail", modal.songdetail );
        $timeout();
      })
      .then(() => {
        return $http.get(`${modal.root.albums}`);
      }, errorHandle)
      .then((albums) => {
        console.log("albums", albums.data);
        modal.albums = albums.data;
        $timeout();
      })
      .then(() =>  {
        return $http.get(`${modal.root.artists}`);
      }, errorHandle)
      .then((artists) => {
        console.log("artists", artists.data);
        modal.artists = artists.data;
        $timeout();
      });


    modal.edit = function () {
      //update selected song information. 
      console.log("song to send", modal.songdetail );
      return $http.put(`${modal.songdetail.url}`, modal.songdetail)
        .then(()=> {
          $scope.$emit("reloadPagePlease");
        }, errorHandle)
        .then(()=> {
          $uibModalInstance.close();
        });
    };

    modal.delete = function (url) {
      //deletes selected song.
      return $http.delete(`${url}`)
      .then(()=> {
        $scope.$emit("reloadPagePlease");
      }, errorHandle)
      .then(()=> {
        $uibModalInstance.close();
      });
    };

    modal.cancel = function () {
    //closes modal, doing nothing.
      $uibModalInstance.dismiss("cancel");
    };

  });
