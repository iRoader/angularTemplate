angular.module('dataApp', ['ui.router', 'data.controller', 'data.service'])


    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/dashboard")

        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "partials/dashboard.html",
                controller: 'nodeCtrl'
            })

            .state('nodeList', {
                url: "/nodeList",
                templateUrl: "partials/node_list.html",
                controller: 'nodeListCtrl'
            })
            .state('nodeList.list', {
                url: "/list",
                templateUrl: "partials/node_list_content.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })

            .state('taskList', {
                url: "/taskList",
                templateUrl: "partials/task_list.html",
                controller: 'taskListCtrl'
            })

            .state('taskInfo', {
                url: "/taskInfo",
                templateUrl: "partials/task_info.html",
                controller: 'taskInfoCtrl'
            })

    })
