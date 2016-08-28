 angular.module('kira.controller', [])
	.controller('kiraCtrl', function($scope){

		// config
        $scope.kira = {
            name: '数据可视化管理平台',
            user: {
            	name: "谢严坤",
            	nickname: "前端开发工程师"
            },
            version: '0.1.0',
            color: {
                primary: '#7266ba',
                info:    '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger:  '#f05050',
                light:   '#e8eff0',
                dark:    '#3a3f51',
                black:   '#1c2b36'
            },
            settings: {
                
            }
        }

		$scope.langs = {cn:'中文', en:'英文'};

	})