  angular.module('weatherApp.controllers', []).

  controller('landingController', function($scope) {
  }).	
  controller('brestController', function($scope,$routeParams,$http) {
  	$scope.result;
    $http.get('assets/json/data.json').success(function(data) {
        $scope.result = angular.fromJson(data);
        console.log($scope.result);
            for(city of $scope.result.cities){
    			if(city.name =="Brest"){
    				$scope.cityData = city;
    				console.log(city);    		
    			}
    		}
    });

  }).

  controller('niceController', function($scope) {

  }).

  controller('parisController', function($scope) {

  }).

  controller('lilleController', function($scope) {

  });

