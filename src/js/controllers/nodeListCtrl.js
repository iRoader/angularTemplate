angular.module('kira.controller')
	.controller('nodeListCtrl', nodeListCtrlFun);

nodeListCtrlFun.$inject = ['$scope', '$state'];

var data = {
		type: 1,
		data: [
			{ id: 1, nodeName: '北京节点', nowTask: '198', endTask: '89', state: 1 },
			{ id: 2, nodeName: '美国节点', nowTask: '78', endTask: '189', state: 2 },
			{ id: 3, nodeName: '新加坡节点', nowTask: '342', endTask: '213', state: 3 },
			{ id: 4, nodeName: '日本节点', nowTask: '45', endTask: '967', state: 0 },
			{ id: 5, nodeName: '广州节点', nowTask: '132', endTask: '1323', state: 3 },
			{ id: 6, nodeName: '法国节点', nowTask: '765', endTask: '76', state: 1 },
			{ id: 7, nodeName: '韩国节点', nowTask: '342', endTask: '452', state: 3 },
		]
		
	};

function nodeListCtrlFun($scope, $state){

	$scope.items = data.data;


	console.log($scope.items)
	console.log('++++++++++++++++++++++++++++++++')
	
	$scope.toTaskList = function(nodename){
		console.log(nodename);
		$state.go('app.taskList', {id: nodename})
	}


}
