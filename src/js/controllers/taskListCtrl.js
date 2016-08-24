angular.module('kira.controller')
	.controller('taskListCtrl', taskListCtrlFun);

taskListCtrlFun.$inject = ['$scope', 'httpApiService'];

function taskListCtrlFun($scope, httpApiService){

	console.log($scope)
	console.log('taskListCtrlFun')


}