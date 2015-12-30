'use strict';

/**
 * @ngdoc overview
 * @name testVbrappApp
 * @description
 * # testVbrappApp
 *
 * Main module of the application.
 */
var myapp = angular
  .module('testVbrappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial','ngMessages'
  ]);


function watchLanguageChange($scope,propertiesfactory){
  $scope.$watch(function () { return propertiesfactory.getProperties("no"); },
    function (value) {
      $scope.properties = value;
      console.log("$scope.properties in login con inside:"+$scope.properties);
    }
  );
}

myapp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
