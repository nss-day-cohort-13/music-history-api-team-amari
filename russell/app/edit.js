angular.module("Russell")
  .controller("Edit", function($scope, $timeout, RootFactory, NewItemFactory) {
    $scope.title = "edit page";

	RootFactory.getSongs()
	.then((songs) => {
		$scope.songList = songs
		console.log("$scope.songList = ", $scope.songList)
	}).then(
		RootFactory.getAlbums().then((albums) => {
			$scope.albumList = albums
			console.log("$scope.albumList = ", $scope.albumList)
			}).then(
				RootFactory.getArtists().then((artists) => {
					$scope.artistList = artists
					console.log("$scope.artistList = ", $scope.artistList)
			})
		)
	).then($timeout())

	$scope.createSong = function(selectedSong, selectedAlbum) {
		// console.log("In submit")
		// console.log("selectedAlbum = ", selectedAlbum)
		console.log("selectedAlbum = ", selectedAlbum)
		result = `{"title": "${selectedSong}","albums": ["${selectedAlbum}"]}`
		NewItemFactory.postNewSong(result)
	}


	$scope.createArtist = function(selectedArtist) {
		// console.log("In submit")
		// console.log("selectedAlbum = ", selectedAlbum)
		result = `{"name": "${selectedArtist}"}`
		NewItemFactory.postNewArtist(result)
	}


	$scope.createAlbum = function(selectedAlbum, selectedArtist) {
		// console.log("In submit")
		console.log("selectedArtist = ", selectedArtist)
		result = `{"title": "${selectedAlbum}","artists": ["${selectedArtist}"]}`
		NewItemFactory.postNewAlbum(result)
	}

  });
