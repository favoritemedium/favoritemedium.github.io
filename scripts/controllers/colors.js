'use strict';

angular.module('fmApp').
  controller('ColorCtrl', ['$scope', '$rootScope', 'fmData', function($scope, $rootScope, fmData) {

    fmData.colors().then(function(res){
      $scope.colors = res
    })


  }]);