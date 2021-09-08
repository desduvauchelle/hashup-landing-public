angular.module ('app.pages.ux', [
    'ui.router'
])
    // Configure the state for navigation
    .config (['$stateProvider',function config ($stateProvider) {
                 $stateProvider.state ('ux', {
                     url: '/user-experience',
                     views: {
                         "main": {
                             controller: 'UxCtrl',
                             templateUrl: 'pages/ux/ux.tpl.html'
                         }
                     },
                     data: {
                         pageTitle: 'Terms of Service'
                     }
                 });
             }])

    // Controller
    .controller ('UxCtrl', ['$scope', '$http', function UxCtrl ($scope, $http) {

    }]);
