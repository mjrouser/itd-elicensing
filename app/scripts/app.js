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
      .state('app', {
        url: '/',
        views: {
            'search':{
                 templateUrl: 'partials/search.html',
                 controller: 'SearchCtrl'
            },
            'popular':{
                 templateUrl: 'partials/popular.html',
                 controller: 'PopularCtrl'
            },
            'category':{
                 templateUrl: 'partials/category.html',
                 controller: 'CategoryCtrl'
            }          
        }
      })
      .state('app.results', {
        url:'results',
        views: {
            'results@search': {
                 templateUrl: 'partials/results.html',
                 controller: 'ResultsCtrl'
            }
        }
        
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      //})
      //.otherwise({
        //redirectTo: '/home'
      });
  
});

