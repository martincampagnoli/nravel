(function() {
  'use strict';

  angular
    .module('nravel')
    .component('whatToSee', {
      bindings: {
      },
      templateUrl: 'scripts/components/whatToSee/whatToSee.html',
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
