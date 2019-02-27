(function() {
  'use strict';

  angular
    .module('nravel')
    .component('menu', {
      bindings: {
      },
      templateUrl: 'scripts/components/menu/menu.html',
      controller: Controller,
    });

  Controller.$inject = ['$rootScope'];
    /* @ngInject */
  function Controller($rootScope)
  {
    var ctrl = this;

    ctrl.$onInit = function() {

      // $('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
      // var $anchor = $(this);
      // $('html, body').stop().animate({
      // scrollTop: $($anchor.attr('href')).offset().top
      // }, 1200, 'easeInOutExpo');
      // event.preventDefault();
      // });
    };
  }
})();
