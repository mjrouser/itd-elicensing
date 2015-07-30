'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the portalApp
 */
angular.module('portalApp')
  .controller('ResultsCtrl', function ($scope, GSAservice) {
           

           $scope.queryRes = GSAservice.queryRes;


           $scope.$watchCollection(
                 function(){ return GSAservice.queryRes; },

                 function(newVal) {
                     $scope.queryRes = newVal;
           },
           true
      );

});