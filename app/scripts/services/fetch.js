'use strict';

/**
 * @ngdoc service
 * @name portalApp.fetch
 * @description
 * # fetch
 * Service in the portalApp.
 */




angular.module('portalApp')
  .factory('Fetch', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource( 'http://146.243.30.38:80/search', 

            //params
            {
              q:'@q',
              client: 'custom_license',
              proxystylesheet: 'custom_license',
              output: 'xml_no_dtd',
              proxyreload: 0,
              getfields: '*',
              ie: 'UTF-8',
              oe: 'UTF-8',
              tlen: '215',
              sitefolder: 'portal',
              filter: '0',
              site: 'PORTALxLICENSE',
              startsite: 'PORTALxLICENSE',
              Search: 'Search'
            },  
            //actions
            {
              get: {
                method: 'GET',
                isarray: false,
                crossDomain: true
              }
            },
            //headers
            { 
              headers: {
                'Accept': 'application/json, application/javascript, text/html',
                'Content-Type': 'application/json'
              }
            }

        

    );
  });