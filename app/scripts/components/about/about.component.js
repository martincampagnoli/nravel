(function() {
  'use strict';

  angular
    .module('nravel')
    .component('about', {
      bindings: {
      },
      templateUrl: 'scripts/components/about/about.html',
      controller: Controller,
    });

  Controller.$inject = ['$rootScope'];
    /* @ngInject */
  function Controller($rootScope)
  {
    var ctrl = this;

    ctrl.$onInit = function() {

    };
  }
})();
