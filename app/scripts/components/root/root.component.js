(function() {
  'use strict';

  angular
    .module('nravel')
    .component('root', {
      bindings: {
      },
      templateUrl: 'scripts/components/root/root.html',
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
