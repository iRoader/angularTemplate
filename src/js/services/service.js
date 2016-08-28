
//声明service的模块
angular.module('kira.service')
    .factory('httpApiService',['$http',
        function($http){
        var sendRequest = function(options){
            options = options || {};
            var METHOD = options.method || 'POST',
                GATEWAY = options.gateway || 'http://api.ktctc.com:8090/http_gate_api';

            options.access_token = "" ;

            return $http({
                method: METHOD,
                url: GATEWAY,
                data:JSON.stringify(options.data),
                headers: {
                    'Content-Type': 'text/plain'
                }
            }).then(function(result){
                console.log(result)
            })
        }
        return {
            sendRequest:sendRequest
        }
    }])

    .factory('loginServices', ['$state', function($state){

        var user = localStorage.getItem('options.data.access_token')
        console.log(user)
        if(user){
            return $state.go('app.home');

        }else{
            return $state.go('app.login');

        }
    }])