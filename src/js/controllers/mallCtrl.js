angular.module('phoenix.controller')
    .controller('mallCtrl',mallCtrlFunc);
mallCtrlFunc.$inject = ['$scope', '$ionicPopup', 'loginServices'];
function mallCtrlFunc($scope, $ionicPopup, loginServices){
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
