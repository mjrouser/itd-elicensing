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

          $scope.data = {};

          $scope.getResults = function () {
                Fetch.get({ q: $scope.formQuery }, function(response){
                     $scope.data.items = response;
                     console.log('Hi there!');
                     });
              };
    
  });


