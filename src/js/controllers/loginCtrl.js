/**
 * Created by John on 15/10/23.
 */
angular.module('phoenix.controller')
    .controller('loginCtrl',loginCtrlFunc);
loginCtrlFunc.$inject = ['$scope','$state', 'httpApiService'];
function loginCtrlFunc($scope, $state, httpApiService){

    //验证获取接口
    $scope.getCode = function(){
        var options = {};
        options.data = {
            "access_token": "",
            "passthrough": "",
            "payload":{
                "username": $scope.phone
            },
            "message_type": "account.get_auth_code"
        };

        httpApiService.sendRequest(options).then(function(result){
            console.log(result)
        })
    }


    //确认登陆接口
    $scope.signIn = function(){
        var options = {};
        options.data = {
            "access_token": "",
            "passthrough": "",
            "payload":{
                "username": $scope.phone,
                "password": $scope.password,
                "login_type": "tel"
            },
            "message_type": "account.login"
        };

        httpApiService.sendRequest(options).then(function(result){
            console.log('login request');

            $scope.user = localStorage.getItem(options.data.access_token)

            if(!$scope.user){
                localStorage.setItem("options.data.access_token", $scope.phone);

                $state.go('app.home');
            }

            console.log('options.data.access_token')

        })
    }





}
