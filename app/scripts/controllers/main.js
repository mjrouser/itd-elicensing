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

          console.log($scope.data);

          $scope.getResults = function () {
                Fetch.jsonpQuery({ q: $scope.formQuery }, function(){
                     //$scope.data.results = response;
                     
                     }).$promise.then(

                          function(data){
                             $scope.data = data;
                             console.log($scope.data);
                          },
                          function(error){
                            console.log('you done goofed.');
                          }
                     );
                   console.log('Hi there!');

              };
    
  });


