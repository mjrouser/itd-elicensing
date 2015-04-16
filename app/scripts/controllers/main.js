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


       
          Fetch.jsonpquery(function(data){
          	$scope.queries = data;
              console.log();

          });
       



/*
  	var entry = Fetch.get({ q: 'q=nurse' }, function(data) {
  		$scope.entry = data;
  		
  	});
  	console.log(entry);
*/

/*  	
  	$scope.results = [];

  	$scope.form = {

  		query: ''
  	};

  	//loadRemoteData();

  	$scope.getResults = function(){

  		Fetch.getResults($scope.form.widget.query)
  			.then(
  				loadRemoteData,
  				function(errorMessage){
  					console.warn(errorMessage);
  				}
  			);
  	};

  	function applyRemoteData( newResults ) {
  		$scope.results = newResults;
  	}

  	function loadRemoteData (){

  		Fetch.getResults()
  		  .then(
  		  	function(results){
  		  		applyRemoteData( results );
  		  	}
  		  );
  	}
  	return( console.log($scope.results));
});
*/


  
  /*  	

    	var self = this;
    	$scope.submit = function (){
    		var thing1 = {q: self.widget.query};
    		console.log('user clicked submit with ', thing1);
       };
       

 */     
  });


