'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the portalApp
 */
angular.module('portalApp')
  .controller('ResultsCtrl', function ($scope, $state, GSAservice) {
           

           $scope.queryRes = [];
           

           $scope.$watchCollection(
                 function(){ 
                 	return GSAservice.queryRes;
                 	
                 },

                 function(newVal) {                       
                     

                     $scope.queryRes= [];
                     newVal.GSP.RES.R.forEach(function(res){
                              $scope.queryRes.push(res);
                             	
                       });


                     
                       
                     
               
                     console.log($scope.queryRes);
                     console.log('Search values pushed to array for results view');
           }
           
      );

});