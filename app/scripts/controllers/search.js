'use strict';

/**
 * @ngdoc function
 * @name itdElicensingApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the itdElicensingApp
 */
angular.module('portalApp')
  .controller('SearchCtrl', function ($scope, $state, GSAservice, $stateParams) {

         $scope.getResults = function(){
         	console.log('Query submited through SearchCtrl');
         	new GSAservice.GSAquery( {q: $scope.formQuery} );
         	$state.go('index.resState');

         	$scope.formQuery  = $stateParams.queryParam;
         	
       };
         
       
  });

 