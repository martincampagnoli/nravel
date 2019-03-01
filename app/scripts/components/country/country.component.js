(function() {
  'use strict';

  angular
    .module('nravel')
    .component('country', {
      bindings: {
        randomCountry: '<'
      },
      templateUrl: 'scripts/components/country/country.html',
      controller: Controller,
    });

  Controller.$inject = ['$location'];
    /* @ngInject */
  function Controller($location)
  {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.getNewCountry = getNewCountry;
    };


    function getNewCountry(){
      var min = 1;
      var max = 100;
      var random =Math.floor(Math.random() * (+max - +min)) + +min;
      $location.url(random);
    };
  }
})();
