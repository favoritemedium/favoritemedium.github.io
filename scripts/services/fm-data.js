
'use strict';

angular.module('fmApp')
  .factory('fmData', ['$q', function($q){
    var $injector = angular.injector(['ng']);
    var $http = $injector.get('$http');

    var Data = function(data){
      angular.extend(this, data);
    };


    Data.colors = function(){
      var d = $q.defer();

      $http.get('/data/colors.json').success(function(res){
        d.resolve(res);
      });

      return d.promise;
    };

    return Data;

  }]);
