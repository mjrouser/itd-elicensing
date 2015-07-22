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
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('/results', {
        url:'/results',
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .state('/about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      //})
      //.otherwise({
        //redirectTo: '/home'
      });
  
});
