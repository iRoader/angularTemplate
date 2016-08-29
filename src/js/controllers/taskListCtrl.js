angular.module('kira.controller')
	.controller('taskListCtrl', taskListCtrlFun);

taskListCtrlFun.$inject = ['$scope', '$state', '$stateParams'];

function taskListCtrlFun($scope, $state, $stateParams){

	console.log($scope)
	console.log('taskListCtrlFun');

	var taskListdata = {
		type: 1,
		data: [
			{ id: 1, clone: 198, resource: 89, consume: 19, state: 1 },
			{ id: 2, clone: 198, resource: 89, consume: 19, state: 0 },
			{ id: 3, clone: 198, resource: 89, consume: 19, state: 2 },
			{ id: 4, clone: 198, resource: 89, consume: 19, state: 1 },
			{ id: 5, clone: 198, resource: 89, consume: 19, state: 1 },
			{ id: 6, clone: 198, resource: 89, consume: 19, state: 2 },
			{ id: 7, clone: 198, resource: 89, consume: 19, state: 0 },
		]
	}

	$scope.items = taskListdata.data;

	// 获取传递过来的参数
	$scope.nodename = $stateParams.nodename;
	console.log($scope.nodename)

	$scope.goInfo = function(id){
		console.log(this);
		$state.go("app.taskInfo", {id: id})
	}

}