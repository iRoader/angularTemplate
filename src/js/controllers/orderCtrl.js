angular.module('phoenix.controller')
    .controller('orderCtrl',orderCtrlFunc);
orderCtrlFunc.$inject = ['httpApiService','$scope', '$state', 'loginServices'];
function orderCtrlFunc(httpApiService,$scope, $state, loginServices){

    $scope.access_token = localStorage.getItem('options.data.access_token');

    var orderStatus = new Array("正在停车", "未支付", "已完成");


    var options = {};
    options.data = {
        "access_token": $scope.access_token,
        "passthrough": "",
        "payload":"",
        "message_type": "order.get_order_list"
    };
    httpApiService.sendRequest(options).then(function(result){

        //$scope.orderList = result;
        console.log(result)

        $scope.orderList = new Array();


        for (var i in result){

            $scope.orderList[i] = result[i];
            var d=new Date($scope.orderList[i].start_time * 1000);
            $scope.orderList[i].start_time = formatDate(d);

            $scope.orderList[i].statu = orderStatus[$scope.orderList[i].status];

        }

        $scope.orderGo = function(status, order_id){
            if(status == 1){
                $state.go('app.pay',{orderId:order_id});

            }else if(status == 0){
                $state.go('app.timer');

            }
            else if(status == 2){
                $state.go('app.orderDetail', {orderId:order_id});

            }
        }

        function formatDate(now) {
            var year=now.getFullYear();
            var month=now.getMonth()+1;
            var date=now.getDate();
            var hour=now.getHours();
            var minute=now.getMinutes();
            var second=now.getSeconds();

            month = month < 10 ? "0" + month : month;
            date = date < 10 ? "0" + date : date;
            hour = hour < 10 ? "0" + hour : hour;
            minute = minute < 10 ? "0" + minute : minute;
            second = second < 10 ? "0" + second : second;

            return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
        }

    })

}
