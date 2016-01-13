angular.module('fmApp')
	.directive('sidebar', ['$location',
		function($location) {
			return {
				restrict: 'E',
				scope: {
					'parent': '=parent',
					'page': '=page'
				},
				templateUrl: '/views/directives/sidebar.html',
				link: function(scope) {

					scope.navigation = [{
						title: 'Overview',
						path: '/overview'
					}, {
						title: 'Logo',
						path: '/logos'
					}, {
						title: 'Typography',
						path: '/typography/fonts',
						submenu: [{
							title: 'Our Fonts',
							path: '/typography/fonts'
						}, {
							title: 'Headers',
							path: '/typography/headers'
						}, {
							title: 'Copy',
							path: '/typography/copy'
						}]
					}, {
						title: 'Color',
						path: '/colors/solid',
						submenu: [{
							title: 'Solid',
							path: '/colors/solid'
						}, {
							title: 'Gradients',
							path: '/colors/gradients'
						}]
					}, {
						title: 'Collateral',
						path: '/collateral/namecards',
						submenu: [{
							title: 'Name Cards',
							path: '/collateral/namecards'
						}]
					}
					/*
					, {
						title: 'Form Elements',
						path: '/forms/buttons',
						submenu: [{
							title: 'Buttons',
							path: '/forms/buttons'
						},{
							title: 'Roll Over',
							path: '/forms/rollover'
						},{
							title: 'Images',
							path: '/forms/images'
						},{
							title: 'Animations',
							path: '/forms/animations'
						},{
							title: 'Icons',
							path: '/forms/icons'
						},]

					}
					*/
					]

			      scope.isActive = function(path) {
			        var pttrn = new RegExp('^' + path, 'gi');
			        return pttrn.test($location.path());
			      };

			      scope.isActiveSub = function(submenu) {
			      	var found = false;
			      	angular.forEach(submenu, function(i){
			      		if(scope.isActive(i.path)){
			      			found = scope.isActive(i.path)
			      		}
			      	})
			      	return found;
			      };

				}
			};
	}]);