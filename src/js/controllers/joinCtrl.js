angular.module('phoenix.controller')
    .controller('joinCtrl',joinCtrlFunc);
joinCtrlFunc.$inject = ['$scope', 'loginServices'];
function joinCtrlFunc($scope, loginServices){
    // $scope.config = {
    //     url:'http://www.ktctc.com/',// 分享的网页链接
    //     title:'悦停车',// 标题
    //     desc:'悦享生活，快乐停车',// 描述
    //     img:'http://www.ktctc.com/img/pp-logo.png',// 图片
    //     img_title:'悦停车 logo',// 图片标题
    //     from:'悦停车网站' // 来源
    // };
    // $scope.share_obj = new nativeShare('nativeShare',$scope.config);
}
