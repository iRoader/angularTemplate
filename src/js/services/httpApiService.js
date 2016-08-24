// angular.module('kira.service')
//  .factory('httpApiService', function($http){
//      console.log("-----------------------------------");
//      var sendRequest = function(options){
//          console.log(options)
            
//         }
//         var getPost = function(post){
//          console.log('+++++++++++************************')
//         }


//         return {
//          sendRequest: sendRequest,
//          getPost: getPost
//         };

//  })

angular.module('kira.service')
    .factory('httpApiService', apiServicesFun);

apiServicesFun.$inject = ['$http'];

function apiServicesFun(){
    console.log("-----------------------------------");
    var sendRequest = function(options){
        console.log(options)
        
    }
    var getPost = function(post){
        console.log('+++++++++++************************')
    }


    return {
        sendRequest: sendRequest,
        getPost: getPost
    };

}




