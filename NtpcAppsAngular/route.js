'use strict';

var scotchApp = angular.module('scotchApp', [
	'ngRoute', 
	'scotchAppControllers'
	]);

scotchApp.config(['$routeProvider', 
	function($routeProvider) {
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
			})
			.when('/app/:id', {
				templateUrl : 'pages/app-detail.html',
				controller  : 'DetailController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);