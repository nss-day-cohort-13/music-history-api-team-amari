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
    const Albums = $http.get("http://localhost:8000/albums")
    const Artists = $http.get("http://localhost:8000/artists")
    const Songs = $http.get("http://localhost:8000/songs")

    return {
      getRoot: () => {
        return httpget.then(res => res.data); 
      },
      getAlbums: () => {
        return Albums.then(res => res.data);
      },
      getSongs: () => {
        return Songs.then(res => res.data);
      },
      getArtists: () => {
        return Artists.then(res => res.data);
      }
    };
  })
  .factory("NewItemFactory", ($http) => {

    // const sendSong = $http.post("http://localhost:8000/songs", songInfo);

    return {
      postNewSong: (songInfo) => {
        console.log("songInfo = ", songInfo)
        return $http.post("http://localhost:8000/songs/", songInfo)
        .then(
          res => console.log("res = ", res.data)
          // console.log("res.data = " res.data) 
        )
      },
      postNewArtist: (artistInfo) => {
        console.log("artistInfo = ", artistInfo)
        return $http.post("http://localhost:8000/artists/", artistInfo)
        .then(
          res => console.log("res = ", res.data)
        )
      },
      postNewAlbum:(albumInfo) => {
        console.log("albumInfo = ", albumInfo)
        return $http.post("http://localhost:8000/albums/", albumInfo)
        .then(
          res => console.log("res = ", res.data)
        )
      }
    }

  })

  .controller("Main", [
    "$scope",
    "$http", 
    "$timeout", 
    function($scope) {
      
      $scope.view = true;

    }]);