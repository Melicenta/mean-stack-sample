var application = angular.module("application", ['ui.router']);

application.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

application.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('application', {
            url: '/',
            views: {
                header: {
                    templateUrl: 'resources/templates/header'
                },
                footer: {
                    templateUrl: 'resources/templates/footer'
                }
            }
        })

        .state('application.schema', {
            url: 'schema',
            views: {
                'content@': {
                    templateUrl: 'resources/templates/schema'
                }
            }
        });
}]);
