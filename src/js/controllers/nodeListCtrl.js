angular.module('data.controller')
	.controller('nodeListCtrl', nodeListCtrlFun);

nodeListCtrlFun.$inject = ['$scope', 'httpApiService'];

function nodeListCtrlFun($scope, httpApiService){

	console.log($scope)
	console.log('++++++++++++++++++++++++++++++++')
	console.log(httpApiService)


}