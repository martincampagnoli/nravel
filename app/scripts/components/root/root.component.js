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

  Controller.$inject = ['$rootScope', '$http', '$timeout', '$sce'];
    /* @ngInject */
  function Controller($rootScope, $http, $timeout, $sce)
  {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.loadRandomCountry = loadRandomCountry;
    };

    function generateUrlMap(rc){
  		return "https://www.google.com/maps/embed/v1/view?zoom=4&center=" + rc.latlng[0] + "," + rc.latlng[1] + "&key=AIzaSyB0iePXe1BeVIOJHifld241qJoTzXT085Q";
  	}


    function getCountryInfo(rc){
      var url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles="+ rc.name + "&format=json";
      //UIHelper.blockUI();
      var trustedUrl = $sce.trustAsResourceUrl(url);
      $http.jsonp(trustedUrl).then(function(response) {
        ctrl.randomCountry.info = response.data.query.pages[Object.keys(response.data.query.pages)[0]].extract;
        //UIHelper.unblockUI();
        });

    }

    function loadRandomCountry() {
      var randomIndex = 0;
      var urlCountries = 'countries.json'
      //UIHelper.blockUI();
      $http.get(urlCountries).then(function (response){
        $timeout(function(){
        ctrl.countryList = response.data;
          if (ctrl.specificCountry != undefined && ctrl.specificCountry != '' && ctrl.specificCountry != null){
            ctrl.specificCountry = ctrl.specificCountry.replace(/%20/g, " ");
            for (randomIndex; randomIndex < ctrl.countryList.length; randomIndex ++){
              if (ctrl.countryList[randomIndex].name == ctrl.specificCountry) break;
            }
            if (randomIndex == ctrl.countryList.length){
              randomIndex = Math.floor((Math.random() * ctrl.countryList.length) + 0);
            }
            ctrl.randomCountry = ctrl.countryList[randomIndex];
          }
          else{
            randomIndex = Math.floor((Math.random() * ctrl.countryList.length) + 0);
            ctrl.randomCountry = ctrl.countryList[randomIndex];
          }
          ctrl.randomCountry.mapUrl = generateUrlMap(ctrl.randomCountry);
          // ctrl.seeList = [];
          // loadSeeList(ctrl.randomCountry);
          getCountryInfo(ctrl.randomCountry)
          // ctrl.loaded = true;
          // ctrl.$broadcast('finished');
          //UIHelper.unblockUI();
        });

      });
    };
  }
})();
