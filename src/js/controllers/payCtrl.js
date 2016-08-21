/**
 * Created by John on 15/11/12.
 */
angular.module('phoenix.controller')
    .controller('payCtrl',payCtrlFunc);
payCtrlFunc.$inject = ['httpApiService', '$scope', '$state', '$ionicPopup', '$stateParams', 'loginServices'];
function payCtrlFunc(httpApiService, $scope, $state, $ionicPopup, $stateParams, loginServices){
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: '悦享生活',
            template: '非常抱歉，此功能尚未开放'
        });
        alertPopup.then(function(res) {
            console.log(res);
        });
    };

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



    $scope.goPay = function(){

        httpApiService.sendRequest(options).then(function(result){
            console.log(result)
            console.log("kkkkkk")
            if(result){
                var alertPopup = $ionicPopup.alert({
                    title: '悦享生活',
                    template: '支付成功'
                });
                alertPopup.then(function(res) {
                    console.log(res);
                    $state.go("app.orderDetail")
                });
            }
        })
    }


}
