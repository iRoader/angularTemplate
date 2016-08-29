angular.module('kiraApp', [
        'ui.router', 
        'kira.controller', 
        'kira.directive', 
        'kira.service'
    ])


    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/app/dashboard")

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'partials/app.html'
            })

            .state('app.dashboard', {
                url: "/dashboard",
                templateUrl: "partials/dashboard.html"
            })

            // .state('app.chartDirective', {
            //     url: "/chartDirective",
            //     templateUrl: "partials/chartDirective.html",
            //     controller: 'chartDirectiveCtrl'
            // })

            .state('app.nodeList', {
                url: "/nodeList",
                templateUrl: "partials/node_list.html",
                controller: 'nodeListCtrl'
            })
            // .state('nodeList.list', {
            //     url: "/list",
            //     templateUrl: "partials/node_list_content.html",
            //     controller: function($scope) {
            //         $scope.items = ["A", "List", "Of", "Items"];
            //     }
            // })

            .state('app.taskList', {
                url: "/taskList/:nodename",
                templateUrl: "partials/task_list.html",
                controller: 'taskListCtrl'
            })

            .state('app.taskInfo', {
                url: "/taskInfo/:id",
                templateUrl: "partials/task_info.html",
                controller: 'taskInfoCtrl'
            })

    })
