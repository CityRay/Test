'use strict';
// create the module and name it scotchApp
// 
/*
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});
*/

var scotchAppControllers = angular.module('scotchAppControllers', []);


// create the controller and inject Angular's $scope
scotchAppControllers.controller('mainController', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('app/app.json').success(function(data) {
	      $scope.apps = data;
	    });

	    $scope.orderProp = 'id';

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';	

}]);

scotchAppControllers.controller('aboutController', ['$scope', '$http', 
	function($scope, $http) {

	// create a message to display in our view
	$scope.message = 'Look! I am an about page.';
	$scope.phone = '2222222222222222222222';

}]);

scotchAppControllers.controller('contactController', ['$scope', '$http', 
	function($scope, $http) {

	// create a message to display in our view
	$scope.message = 'You can Contact Me from <a href="http://cityray.github.io/myWeb/">Here</a>';
	$scope.phone = '2222222222222222222222';

}]);

scotchAppControllers.controller('DetailController', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		$http.get('app/' + $routeParams.id + '.json').success(function(data) {
	      $scope.app = data;
	    });
}]);
