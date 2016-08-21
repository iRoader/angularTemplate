/**
 * Created by John on 15/10/28.
 */
angular.module('phoenix.controller')
    .controller('timerCtrl', timerCtrlFunc);
timerCtrlFunc.$inject = ['$scope', '$ionicPopup', '$stateParams', 'httpApiService', '$interval', '$state'];

function timerCtrlFunc($scope, $ionicPopup, $stateParams, httpApiService, $interval, $state) {
    $scope.showAlert = function() {
        var alertPopup = $ionicPopup.alert({
            title: '悦享生活',
            template: '非常抱歉，此功能尚未开放'
        });
        alertPopup.then(function(res) {
            console.log('弹窗');
        });
    };

    var orderId = $stateParams['orderId'];
    $scope.access_token = localStorage.getItem('options.data.access_token');


    console.log(orderId)

    var options = {};
    options.data = {
        "access_token": $scope.access_token,
        "passthrough": "",
        "payload": {
            "order_id": orderId
        },
        "message_type": "order.get_order_info"
    };

    var timer = undefined;
    $scope.passedTime = {};
    httpApiService.sendRequest(options).then(function(result) {
        $scope.timerInfo = result;
        var startTime = result.start_time * 1000;
        var severTime = result.server_time * 1000;
        var gapTime = (new Date()).getTime() - result.server_time * 1000;

        console.log(startTime)
        console.log(severTime)

        timer = $interval(function() {
            var currentTime = (new Date()).getTime() - gapTime - startTime;

            var secondUnit = 1000;
            var minuteUnit = secondUnit * 60;
            var hourUnit = minuteUnit * 60;

            var hour = parseInt(currentTime / hourUnit);
            var minute = parseInt((currentTime - hour * hourUnit) / minuteUnit);
            var second = parseInt((currentTime - hour * hourUnit - minuteUnit * minute) / secondUnit);

            console.log(second);

            hour = hour < 10 ? "0" + hour : hour;
            minute = minute < 10 ? "0" + minute : minute;
            second = second < 10 ? "0" + second : second;

            $scope.passedTime.hour = hour;
            $scope.passedTime.minute = minute;
            $scope.passedTime.second = second;

            $scope.passedTime.minutes = parseInt((currentTime) / minuteUnit);
            $scope.money = ($scope.passedTime.minutes/15)*2.5<2.5?2.5:($scope.passedTime.minutes/15)*2.5;

            $scope.money = $scope.money.toFixed(2);
        }, 1000)
    })

    $scope.pay = function(){
        var options = {};
        options.data = {
            "access_token": $scope.access_token,
            //"access_token": "15112345678",
            "passthrough": "",
            "payload":{
                "order_id": orderId
            },
            "message_type": "park.stop_park"
        };

        httpApiService.sendRequest(options).then(function(result){
            if(result != undefined){
                $interval.cancel(timer)
                $state.go('app.order', {}, {reload:true})
            }
        })
    }
}
