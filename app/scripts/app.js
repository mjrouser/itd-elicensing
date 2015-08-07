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
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'

      })
      
      .state('index.resState', {
        url:'results',
        templateUrl: 'partials/results.html',
        controller: 'ResultsCtrl'

      });
    $urlRouterProvider.otherwise('/');
  
});

