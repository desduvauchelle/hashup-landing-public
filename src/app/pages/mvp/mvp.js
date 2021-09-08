angular.module('app.pages.mvp', [
        'ui.router'
    ])
    // Configure the state for navigation
    .config(['$stateProvider', function config($stateProvider) {
        $stateProvider.state('mvp', {
            url: '/mvp',
            views: {
                "main": {
                    controller: 'MvpCtrl',
                    templateUrl: 'pages/mvp/mvp.tpl.html'
                }
            },
            data: {
                pageTitle: 'MVP'
            }
        });
    }])

// Controller
.controller('MvpCtrl', ['$scope', 'publicService', '$http', 'nzSwal', function ContactCtrl($scope, publicService, $http, nzSwal) {



    $scope.$on('$viewContentLoaded', function() {
        // Content on the page is loaded
        console.log("Contact page loaded");
        // $scope.sendMessage();
    });
}]);
