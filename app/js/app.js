'use strict';

// Declare app level module which depends on views, and components
angular.module('weatherApp', [
  'ngRoute',
  'weatherApp.controllers'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
$routeProvider.
	when("/view1", {templateUrl: "partials/view1.html", controller: "view1Controller"}).
	when("/view2", {templateUrl: "partials/view2.html", controller: "view2Controller"}).
	otherwise({redirectTo: '/view1'});
}]);
