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
      $location.url('newcountry');
    };
  }
})();
