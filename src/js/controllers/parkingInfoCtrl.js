angular.module('phoenix.controller')
    .controller('parkingInfoCtrl',parkingInfoFunc);

parkingInfoFunc.$inject = ['$scope','httpApiService','$stateParams','$state', 'loginServices'];
function parkingInfoFunc($scope, httpApiService, $stateParams, $state, loginServices){
    var parkId = $stateParams['parkId'],
        spaceId = $stateParams['spaceId'];
    $scope.space = {};

    if(spaceId){
        $scope.space.id = spaceId;
        $scope.hideSpaceId = true;
    }else{
        $scope.hideSpaceId = false;
    }

    $scope.access_token = localStorage.getItem('options.data.access_token');


    var options = {};
    options.data = {
        "access_token": $scope.access_token,
        "passthrough": "",
        "payload": {
            "park_id":"0",
            "spaceId":spaceId
        },
        "message_type": "park.get_parkinglot_info"
    }

    httpApiService.sendRequest(options).then(function(result){
        $scope.parkInfo = result;
    })






    $scope.submit = function(){
        var options = {}
        options.data = {
            "access_token": $scope.access_token,
            "passthrough": "",
            "payload": {
                "space_id":$scope.space.id
            },
            "message_type": "park.park_by_space_id"
        }
        httpApiService.sendRequest(options).then(function(result){
            if(result != undefined){
                //带参数传递
                $state.go('app.timer',{orderId:result.order_id});
            }
        })
    }
}
