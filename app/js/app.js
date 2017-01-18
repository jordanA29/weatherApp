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
	when("/view2", {templateUrl: "partials/view2.html", controller: "view2Controller"}).
	otherwise({redirectTo: '/landing'});
}]);
