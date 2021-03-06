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
      .when('/:country', {
        template:'<root></root>'
      })
  }).run(function($rootScope){
    $rootScope.imgURL = "../images/2.jpg";
  })
  .filter('trusted', ['$sce', function ($sce) {
      return function(url) {
          return $sce.trustAsResourceUrl(url);
      };
  }]);


  function UIHelperMethods() {
      var UIBlocked = 0;
      $.blockUI.defaults.css = {
          padding: 0,
          margin: 0,
          width: '30%',
          top: '40%',
          left: '35%',
          textAlign: 'center',
          cursor: 'wait',
          fontSize:'80px',
          color: 'rgba(255, 255, 255, 1)'
      };

      $.blockUI.defaults.baseZ = 9999;

      return {
          blockUI: function () {
              if (UIBlocked === 0) {
                  UIBlocked++;
                  $.blockUI({
                      message: '<div><span class="fa fa-spinner fa-spin"></span></div>'
                  });
              } else {
                  UIBlocked++;
              }
          },
          unblockUI: function () {
              if (UIBlocked > 0) {
                  UIBlocked--;
                  if (UIBlocked === 0) {
                      $.unblockUI();
                  }
              }
          },
          scrollToTop: function (windowService) {
              windowService.scrollTo(0, 0);
          }
      };
  }

  var UIHelper = (UIHelper === undefined) ? {} : UIHelper;

  UIHelper = new UIHelperMethods();
