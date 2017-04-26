var musicApp = angular.module('musicApp', ['ui.router', 'ngAnimate']);


musicApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	 $stateProvider
	.state('list', {
		url: '/list',
		templateUrl: 'partials/list.html',
		controller: 'MainController'
	})
	.state('details', {
		url: '/details/{id}',
		templateUrl: 'partials/details.html',
		controller: 'DetailCtrl'
	});

	$urlRouterProvider.otherwise('/list');
}]);

musicApp.controller('MainController', ['$scope', '$http', function($scope,$http) {
	$http.get('/api/albums').then(function(albums) {
		//console.log(albums.data);
		$scope.albums = albums.data;
	});
}]);

musicApp.controller('DetailCtrl', function($scope, $http, $stateParams) {
	//console.log($stateParams.id);
	$http.get('/api/album/' + $stateParams.id)
		 .then(function(album) {
		 	$scope.album = album.data;
	});
});