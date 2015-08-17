'use strict';

/**
 * @ngdoc function
 * @name portalApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the portalApp
 */
angular.module('portalApp')
  .controller('ResultsCtrl', function ($scope, $state, GSAservice, $stateParams ) {
          
   
           $scope.$watchCollection(
                 function(){ 
                 	return GSAservice.queryRes;                 	
                 },
                 function(newVal) {                                           
                     $scope.queryRes= [];
                     if(typeof newVal.GSP.RES === 'undefined'){
                           $scope.queryRes.push({E : 'Your search returned no results.'});
                           console.log('well this is interesting');
                           console.log($scope.queryRes);
                     }else{ 
                     	newVal.GSP.RES.R.forEach(function(res){ 
                     		$scope.queryRes.push(res); 
                     	});
                            console.log($scope.queryRes);
                            console.log('Search values pushed to array for results view');
                     }
                  }  
             );

});