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
              Search: 'Search',
              callback: 'JSON_CALLBACK'
            },  
            //actions
            {
              get: {
                method: 'GET',
                isarray: false,
                crossDomain: true,
                headers: {
                'Accept': 'application/json, application/javascript, text/html, application/xhtml+xml,application/xml',
                'Content-Type': 'application/json, application/javascript, text/html, application/xhtml+xml, application/xml'
                }
              },
              jsonpQuery: {
                method: 'JSONP',
                isArray: true,
                //crossDomain: true,
                headers: {
                'Accept': 'application/json, application/javascript, text/html, application/xhtml+xml,application/xml',
                'Content-Type': 'application/json, application/javascript, text/html, application/xhtml+xml, application/xml'
                }
              }
            
            }
        

    );
  });