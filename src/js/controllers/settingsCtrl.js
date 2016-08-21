angular.module('phoenix.controller')
    .controller('settingsCtrl',settingsCtrlFunc);
settingsCtrlFunc.$inject = ['$scope', '$state', 'loginServices'];
function settingsCtrlFunc($scope, $state, loginServices){
    $scope.signOut = function(){
        localStorage.setItem("options.data.access_token", "");
        $state.go("app.login")
    }
}
