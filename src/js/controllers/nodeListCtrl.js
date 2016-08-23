angular.module('data.controller')
	.controller('nodeListCtrl', nodeListCtrlFun);

nodeListCtrlFun.$inject = ['$scope', 'httpApiService'];

var data = {
		type: 1,
		data: [
			{ nodeName: '北京节点', nowTask: '198', endTask: '89', state: 1 },
			{ nodeName: '美国节点', nowTask: '78', endTask: '189', state: 2 },
			{ nodeName: '新加坡节点', nowTask: '342', endTask: '213', state: 3 },
			{ nodeName: '日本节点', nowTask: '45', endTask: '967', state: 0 },
			{ nodeName: '广州节点', nowTask: '132', endTask: '1323', state: 3 },
			{ nodeName: '法国节点', nowTask: '765', endTask: '76', state: 1 },
			{ nodeName: '韩国节点', nowTask: '342', endTask: '452', state: 3 },
		]
		
	};

function nodeListCtrlFun($scope, httpApiService){

	$scope.items = data.data;


	console.log($scope.items)
	console.log('++++++++++++++++++++++++++++++++')
	console.log(httpApiService)


}
