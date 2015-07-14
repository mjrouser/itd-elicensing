'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portalApp
 */


angular.module('portalApp')
  .controller('MainCtrl', function ($scope, Fetch) {

          $scope.data = [];

          console.log($scope.data);

          $scope.getResults = function () {
                Fetch.jsonpQuery({ q: $scope.formQuery }, function(response){
                     $scope.data = response;
                     
                     });
                   console.log('Hi there!');

              };
    
  });


