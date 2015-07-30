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
           this.queryRes =[];
          

           this.GSAquery = function  ( {q} ) {
                Fetch.jsonpQuery({ q }, function(){
                     
                     }).$promise.then(

                          function(data){
                                 self.queryRes= [] ;
                                 data.GSP.RES.R.forEach(function(res){
                                        	self.queryRes.push(res);
                             	
                             });
                             console.log('Data returned and pushed to an array');
                             console.log(self.queryRes); 
                            
                          },

                          function(error){
                            console.log('you done goofed.');
                          }
                     );

                 console.log('GSAservice queried the AJAX resource');

             };

          
  });
