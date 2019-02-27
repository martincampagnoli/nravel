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

  Controller.$inject = ['$anchorScroll'];
    /* @ngInject */
  function Controller($anchorScroll)
  {
    var ctrl = this;
    ctrl.menu = [
      {name: "START", hash:"home", active: true},
      {name: "COUNTRY", hash:"countryInfo", active: false},
      {name: "WHAT TO SEE", hash:"whattosee", active: false},
      {name: "ABOUT", hash:"about", active: false}
    ];

    ctrl.$onInit = function() {
      ctrl.clear = clear;
      ctrl.goTo = goTo;
    };

    function clear(){
      angular.forEach(ctrl.menu, function(elem){
        elem.active = false;
      });
    }

    function goTo(item){
      item.active = true;
      $anchorScroll(item.hash);
    }

  }
})();
