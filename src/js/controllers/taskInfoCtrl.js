angular.module('kira.controller')
	.controller('taskInfoCtrl', taskInfoCtrlFun);

taskInfoCtrlFun.$inject = ['$scope', '$state', '$stateParams'];

function taskInfoCtrlFun($scope, $state, $stateParams){
	$scope.id = $stateParams.id;

	console.log($scope.id)
}