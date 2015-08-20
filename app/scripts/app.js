'use strict';

/**
 * @ngdoc overview
 * @name portalApp
 * @description
 * # portalApp
 *
 * Main module of the application.
 */
angular
  .module('portalApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    
    

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'/*,
        resolve: {
          queryParam: function($stateParams){
             return $stateParams.queryParam;
          }
        }*/

      })
      
      .state('index.resState', {
        url:'results/:queryParam',
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        params: {
          queryParam:  function ($stateParams){
            return $stateParams.queryParam;
          } 
          
        }

      });
    $urlRouterProvider.otherwise('/');
  
});

