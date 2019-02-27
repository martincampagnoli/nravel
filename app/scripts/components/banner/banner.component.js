(function() {
  'use strict';

  angular
    .module('nravel')
    .component('banner', {
      bindings: {
      },
      templateUrl: 'scripts/components/banner/banner.html',
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
