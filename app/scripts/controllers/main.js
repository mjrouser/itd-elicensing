'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portalApp
 */
angular.module('portalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.query = [];
    $scope.submit = function (){
    	console.log('user clicked submit with ',$scope.query);
    };
  });
