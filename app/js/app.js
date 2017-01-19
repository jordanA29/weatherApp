'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.controllers',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
$routeProvider.
	when("/landing", {templateUrl: "partials/landing.html", controller: "landingController"}).
	when("/brest", {templateUrl: "partials/brest.html", controller: "brestController"}).
	when("/paris", {templateUrl: "partials/paris.html", controller: "parisController"}).
	when("/nice", {templateUrl: "partials/nice.html", controller: "niceController"}).
	when("/lille", {templateUrl: "partials/lille.html", controller: "lilleController"}).
	otherwise({redirectTo: '/landing'});
}]);
