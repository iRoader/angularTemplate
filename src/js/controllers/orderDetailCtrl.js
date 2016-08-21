/**
 * Created by John on 15/11/12.
 */
angular.module('phoenix.controller')
    .controller('orderDetailCtrl',orderDetailCtrlFunc);
orderDetailCtrlFunc.$inject = ['$scope', '$ionicPopup', '$stateParams' , 'loginServices', 'httpApiService'];
function orderDetailCtrlFunc($scope, $ionicPopup, $stateParams, loginServices, httpApiService){

    var orderId = $stateParams['orderId'];

    console.log(orderId)

    $scope.access_token = localStorage.getItem('options.data.access_token');

    var options = {};
    options.data = {
        "access_token": $scope.access_token,
        "passthrough": "",
        "payload":{
            "order_id":orderId
        },
        "message_type": "order.charge_order"
    };

    httpApiService.sendRequest(options).then(function(result){
        console.log(orderId)
    })

    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: '悦享生活',
            template: '非常抱歉，此功能尚未开放'
        });
        alertPopup.then(function(res) {
            console.log('弹窗');
        });
    };
}
