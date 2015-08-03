'use strict';

/**
 * @ngdoc function
 * @name itdElicensingApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the itdElicensingApp
 */
angular.module('portalApp')
  .controller('SearchCtrl', function ($scope, GSAservice) {
  
         $scope.queryRes = GSAservice.queryRes;

         $scope.getResults = function(){
         	console.log('Query submited through SearchCtrl');
         	new GSAservice.GSAquery( {q: $scope.formQuery} );
         	
       };
 
  });

 