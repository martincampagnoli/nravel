(function() {
  'use strict';

  angular
    .module('nravel')
    .component('targetCountry', {
      bindings: {
      },
      templateUrl: 'scripts/components/targetCountry/targetCountry.html',
      controller: Controller,
    });

  Controller.$inject = ['$rootScope', '$route'];
    /* @ngInject */
  function Controller($rootScope, $route)
  {
    var ctrl = this;

    ctrl.$onInit = function() {
      ctrl.getSpecificCountry = getSpecificCountry;
    };

    function getSpecificCountry(c) {
      //needs fix
      // console.dir($route);
      // console.dir(c);
      // $route.updateParams({country:c});
      // console.dir($route);

  	};


    function substringMatcher(strs) {
      return function findMatches(q, cb) {
               var matches, substringRegex;

               // an array that will be populated with substring matches
               matches = [];

               // regex used to determine if a string contains the substring `q`
               substringRegex = new RegExp(q, 'i');
               // iterate through the pool of strings and for any string that
               // contains the substring `q`, add it to the `matches` array
               $.each(strs, function(i, str) {
                 if (substringRegex.test(str.name)) {
                   matches.push(str.name);
                 }
               });

               cb(matches);
            };
        };
    $rootScope.$on('finished', function(){
          //initializes the bootstrap component typeahead
          $('.typeahead').typeahead({
            hint: true,
            highlight: true,
            minLength: 1
          },
          {
            name: 'countries',
            source: substringMatcher($rootScope.countryList)
          });
    });

		$('.typeahead').bind('typeahead:selected', function (object, suggestion) {
		    ctrl.getSpecificCountry(suggestion);
    });

		$('.typeahead').bind('blur', function () {
				ctrl.autocompletion = false;
    });
  }
})();
