'use strict';

/**
 * @ngdoc service
 * @name portalApp.GSAservice
 * @description
 * # GSAservice
 * Service in the portalApp.
 */
angular.module('portalApp')
  .service('GSAservice', function ( Fetch ) {

          
           var self = this;
           this.queryRes = {};
          

           this.GSAquery = function  ( q ) {
                Fetch.jsonpQuery( q , function(){
                     
                     }).$promise.then(

                          function(data){
                                self.queryRes= data;
                                console.log('Data returned from Fetch');
                                console.log(self.queryRes);                          
                          } 
                     );

                 console.log('GSAservice queried the AJAX resource');

             };
       
  });
