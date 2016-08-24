angular.module('kira.directive')
	.directive('headerTpl', function(){
		console.log('---------header----------')
		return {
			restrict: 'AE',
			replace: 'true',
			templateUrl: PARTIALS_PATH + 'blocks/header.html'
		}
	})