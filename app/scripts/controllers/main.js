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

          $scope.queryResults = {};

          console.log($scope.queryResults);

          $scope.getResults = function () {
                Fetch.jsonpQuery({ q: $scope.formQuery }, function(){
                     //$scope.queryResults.results = response;
                     
                     }).$promise.then(

                          function(queryResults){
                             $scope.queryResults = queryResults;
                             console.log($scope.queryResults);
                          },
                          function(error){
                            console.log('you done goofed.');
                          }
                     );
                   console.log('Hi there!');

              };
    
  });


