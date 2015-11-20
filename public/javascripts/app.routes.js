(function() {
  "use strict";

  angular
    .module('tornano')
    .config(TornanoRoutes);

  TornanoRoutes.$inject = [
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider'
  ];

  function TornanoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('index', {
        url: '/',
        controller: 'homeController',
        templateUrl: 'partials/home.html',
        data: {
          isIndex:true,
          requireLogin: false
        }
      })
      .state('home', {
        url: '/home',
        controller: 'homeController',
        templateUrl: 'partials/home.html',
        data : {
          requireLogin: false
        }
      })
      .state('GoBagBuilder', {
        url: '/GoBagBuilder',
        controller: 'builderController',
        templateUrl: 'partials/builder.html',
        data: {
          requireLogin: false
        }
      })
      .state('DressUpGame', {
        url: '/DressUpGame',
        controller: 'dressController',
        templateUrl: 'partials/dress.html',
        data: {
          requireLogin: false
        }
      })
      .state('ShelterFinder', {
        url: '/ShelterFinder',
        controller: 'shelterController',
        templateUrl: 'partials/shelter.html',
        data: {
          requireLogin: false
        }
      })
      .state('SlidingTiles', {
        url: '/SlidingTiles',
        controller: 'puzzleController',
        templateUrl: 'partials/puzzle.html',
        data: {
          requireLogin: false
        }
      });

    $locationProvider.html5Mode(true);

  }

})();