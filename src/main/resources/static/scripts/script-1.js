var angular = require("angular"),
	angularRouter = require("angular-ui-router");

var application = angular.module("application", ['ui.router']);

application.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

application.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/schema');

    $stateProvider
        .state('application', {
            url: '/',
            views: {
                header: {
                    templateUrl: 'resources/templates/header.html'
                },
                footer: {
                    templateUrl: 'resources/templates/footer.html'
                }
            }
        })

        .state('application.schema', {
            url: 'schema',
            views: {
                'main-content@': {
                    templateUrl: 'resources/templates/schema.html'
                }
            }
        });
}]);
