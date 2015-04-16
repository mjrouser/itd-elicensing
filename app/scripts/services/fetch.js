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
    return $resource( 'http://146.243.30.38/search?', {}, {
        jsonpquery: {
            method: 'JSONP',
            /* 
            headers: {
                'Accept': 'application/json, application/javascript, text/html',
                'Content-Type': 'application/json'
            },*/
            params:{
            callback: 'JSON_CALLBACK',
            q: 'nurse',
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
            isArray: true 
        }

    });
  });


/*
angular.module('portalApp')
  .factory('Fetch', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource( 'http://146.243.30.38/search?client=custom_license&proxystylesheet=custom_license&getfields=*&ie=UTF-8&oe=UTF-8&tlen=215&sitefolder=portal&filter=0&site=PORTALxLICENSE&startsite=PORTALxLICENSE&Search=Search&:q');
  });

*/

 /*
angular.module('portalApp')
  .service('Fetch', function ($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function




    function getResults(){
    
       var request = $http({

           method: 'GET',	
	     url: 'http://146.243.30.38:80/search?',
	   
	     params:{
	     	action: 'get',
		q: 'nurse',
		client: 'custom_license',
		proxystylesheet: 'custom_license',
		output: 'xml_no_dtd',
		proxyreload: 1,
		Search: 'Search'
	      }
         });

       return( request.then( handleSuccess, handleError ));
     }






     

    // I transform the error response, unwrapping the application dta from
    // the API response payload.
     function handleError( response ) {

                    // The API response from the server should be returned in a
                    // nomralized format. However, if the request was not handled by the
                    // server (or what not handles properly - ex. server error), then we
                    // may have to normalize it on our end, as best we can.
                    if (
                        ! angular.isObject( response.data ) ||
                        ! response.data.message
                        ) {

                        return( $q.reject( 'An unknown error occurred.' ) );

                    }

                    // Otherwise, use expected error message.
                    return( $q.reject( response.data.message ) );

                }


                // I transform the successful response, unwrapping the application data
                // from the API response payload.
     function handleSuccess( response ) {

                    return( response.data );

                }



     return({
    	getResults: getResults
    });

  });
*/