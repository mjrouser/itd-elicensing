'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portalApp
 */
angular.module('portalApp')
  .controller('ResultsCtrl', function ($scope, Fetch) {
              
              Fetch.jsonpquery(function(data){
          	$scope.queries = data;
              console.log('yo mamma!');

               });
  });