(function() {
  'use strict';

  angular
    .module('nravel')
    .component('root', {
      bindings: {
        country:'<'
      },
      templateUrl: 'scripts/components/root/root.html',
      controller: Controller,
    });

  Controller.$inject = ['$rootScope', '$http', '$timeout', '$sce', '$routeParams', '$route'];
    /* @ngInject */
  function Controller($rootScope, $http, $timeout, $sce, $routeParams, $route)
  {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.loadRandomCountry = loadRandomCountry;
      ctrl.specificCountry = $routeParams.country;
    };

    function generateUrlMap(rc){
  		return "https://www.google.com/maps/embed/v1/view?zoom=4&center=" + rc.latlng[0] + "," + rc.latlng[1] + "&key=AIzaSyB0iePXe1BeVIOJHifld241qJoTzXT085Q";
  	}


    function getCountryInfo(rc){
      var url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles="+ rc.name + "&format=json";
      UIHelper.blockUI();
      var trustedUrl = $sce.trustAsResourceUrl(url);
      $http.jsonp(trustedUrl).then(function(response) {
        ctrl.randomCountry.info = response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract;
        UIHelper.unblockUI();
        });

    }

    function loadRandomCountry() {
      var randomIndex = 0;
      var urlCountries = 'countries.json';
      var i = 0
      UIHelper.blockUI();
      $http.get(urlCountries).then(function (response){
        ctrl.countryList = response.data;
        $rootScope.countryList = ctrl.countryList;
          if (!!ctrl.specificCountry && ctrl.specificCountry != ''){
            ctrl.specificCountry = ctrl.specificCountry.replace(/%20/g, " ");

            if(isNaN(ctrl.specificCountry)){
              for (i; i < ctrl.countryList.length; i ++){
                if (ctrl.countryList[i].name.toUpperCase() === ctrl.specificCountry.toUpperCase()) break;
              }
              if (i === ctrl.countryList.length) {
                randomIndex = Math.floor((Math.random() * ctrl.countryList.length) + 0);
                ctrl.randomCountry = ctrl.countryList[randomIndex];
              }
            }
            else {
              randomIndex = Math.floor((Math.random() * ctrl.countryList.length) + 0);
              ctrl.randomCountry = ctrl.countryList[randomIndex];
            }
          }
          else{
            randomIndex = Math.floor((Math.random() * ctrl.countryList.length) + 0);
            ctrl.randomCountry = ctrl.countryList[randomIndex];
          }

          ctrl.randomCountry.mapUrl = generateUrlMap(ctrl.randomCountry);

          getCountryInfo(ctrl.randomCountry);
          $rootScope.$broadcast('finished');
          UIHelper.unblockUI();
        });
    };
  }
})();
