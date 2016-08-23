angular.module('dataApp', ['ui.router', 'data.controller', 'data.directive', 'data.service'])


    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/app/dashboard")

        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'partials/app.html'
            })

            .state('app.dashboard', {
                url: "/dashboard",
                templateUrl: "partials/dashboard.html",
                controller: 'nodeCtrl'
            })

            .state('app.chartDirective', {
                url: "/chartDirective",
                templateUrl: "partials/chartDirective.html",
                controller: 'chartDirectiveCtrl'
            })

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
                url: "/taskList",
                templateUrl: "partials/task_list.html",
                controller: 'taskListCtrl'
            })

            .state('app.taskInfo', {
                url: "/taskInfo",
                templateUrl: "partials/task_info.html",
                controller: 'taskInfoCtrl'
            })

    })
