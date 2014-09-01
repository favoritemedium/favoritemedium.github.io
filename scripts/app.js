'use strict';

angular.module('fmApp', [
  'ngRoute'
])
  .constant('version', '2')
  .config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {
      $routeProvider
        .when('/logos', {
          templateUrl: 'views/pages/logos.html',
          controller: 'StaticCtrl'
        })
        .when('/fonts', {
          templateUrl: 'views/pages/fonts.html',
          controller: 'StaticCtrl',
          resolve: {}
        })
        .when('/typography/fonts', {
          templateUrl: 'views/pages/typography/fonts.html',
          controller: 'TypographyCtrl',
        })
        .when('/typography/headers', {
          templateUrl: 'views/pages/typography/headers.html',
          controller: 'TypographyCtrl',
        })
        .when('/typography/subheaders', {
          templateUrl: 'views/pages/typography/subheaders.html',
          controller: 'TypographyCtrl',
        })

        .when('/colors/solid', {
          templateUrl: 'views/pages/colors/solid.html',
          controller: 'ColorCtrl',
        })
        .when('/colors/gradients', {
          templateUrl: 'views/pages/colors/gradients.html',
          controller: 'ColorCtrl',
        })

        .when('/forms/buttons', {
          templateUrl: 'views/pages/forms/buttons.html',
          controller: 'StaticCtrl',
        })
        .when('/forms/rollover', {
          templateUrl: 'views/pages/forms/rollover.html',
          controller: 'StaticCtrl',
        })
        .when('/forms/images', {
          templateUrl: 'views/pages/forms/images.html',
          controller: 'StaticCtrl',
        })
        .when('/forms/animations', {
          templateUrl: 'views/pages/forms/animations.html',
          controller: 'StaticCtrl',
        })
        .when('/forms/icons', {
          templateUrl: 'views/pages/forms/icons.html',
          controller: 'StaticCtrl',
        })

        .when('/overview', {
          templateUrl: 'views/pages/overview.html',
          controller: 'StaticCtrl',
        })
        .otherwise({
          redirectTo: '/overview'
        });
    }
  ])
  .run([
    '$rootScope',
    '$location',
    function($rootScope, $location, helpers, state, country) {
      //startup
      $rootScope.breadcrumbs = {
        logo: {
          title: 'Logos',
          fm: 'Favorite Medium'
        },
        typography: {
          title: 'Typography',
          fonts: 'Our Fonts',
          headers: 'Headers',
          subheaders: 'Sub Headers'
        },
        colors: {
          title: 'Colors',
          solid: 'Solid',
          gradients: 'Gradients'
        }

      }



    }
  ]);