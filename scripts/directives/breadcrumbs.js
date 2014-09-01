angular.module('fmApp')
	.directive('breadcrumbs', function() {
		return {
			restrict: 'E',
			scope: {
				'parent': '=parent',
				'page': '=page'
			},
			templateUrl: '/views/directives/breadcrumbs.html',
			link: function(scope){
			}
		};
	});