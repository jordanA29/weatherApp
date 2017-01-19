  angular.module('weatherApp.controllers', []).

  controller('landingController', function($scope) {
  }).	
  controller('brestController', function($scope,$routeParams,$http) {
  	$scope.result = {};
    $http.get('assets/json/data.json').success(function(data) {
      $scope.result = data;
      console.log($scope.result);  
      for(city of $scope.result.cities){
        if(city.name =="Brest"){
          $scope.cityData = city;
          console.log($scope.cityData);      		
        }
      }
      $scope.brCurrentTemp = $scope.cityData.forecast[0].current.temp;
      $scope.brCurrentIcon = $scope.cityData.forecast[0].current.sky;
      console.log($scope.brCurrentTemp); 
    });

    $scope.detailTempVisibled = false;
    $scope.detailWindVisibled = false;
    $scope.detailPrecVisibled = false;
    $scope.valDay = 0;
    $scope.result;
    $scope.showTempDetails = function(){
      $scope.detailTempVisibled = !$scope.detailTempVisibled;
    }
    $scope.showWindDetails = function(){
      $scope.detailWindVisibled = !$scope.detailWindVisibled;
    }
    $scope.showPrecDetails = function(){
      $scope.detailPrecVisibled = !$scope.detailPrecVisibled;
    }
    

  }).

  controller('niceController', function($scope) {

  }).

  controller('parisController', function($scope) {

  }).

  controller('lilleController', function($scope) {

  });

