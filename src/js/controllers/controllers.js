// angular.module('data.controller')
//     .controller('dataCtrl', AppCtrlFunc);
// AppCtrlFunc.$inject = ['$scope','$state'];
// function AppCtrlFunc($scope,$state){
//     $scope.$state = $state;
//     console.log("-----------------------------------")
// }


// angular.module('data.controller')
//     .controller('nodeCtrl', function($scope){
//     	console.log("-----------------------------------")
//     });

angular.module('data.controller')
	.controller('nodeCtrl', nodeCtrlFun);

nodeCtrlFun.$inject = ['$scope', 'httpApiService'];

function nodeCtrlFun($scope, httpApiService){

	console.log($scope)
	console.log('++++++++++++++++++++++++++++++++')
	// httpApiService('sakdlk')
	console.log(httpApiService)

	// httpApiService.sendRequest('httpApiService').then(function(result){
 //            console.log(result)
 //        })

}