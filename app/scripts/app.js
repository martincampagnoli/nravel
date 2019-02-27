'use strict';

/**
 * @ngdoc overview
 * @name nravel
 * @description
 * # nravel
 *
 * Main module of the application.
 */
angular
  .module('nravel', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        template:'<root></root>'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



  // falta agregar funcionalidad
  // $(document).ready(function () {
  //
  // /*====================================
  // SCROLLING SCRIPTS
  // ======================================*/
  //
  // $('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
  // var $anchor = $(this);
  // $('html, body').stop().animate({
  // scrollTop: $($anchor.attr('href')).offset().top
  // }, 1200, 'easeInOutExpo');
  // event.preventDefault();
  // });
  //
  //
  // });
