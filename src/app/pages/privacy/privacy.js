angular.module ('app.pages.privacy', [
    'ui.router'
])
    // Configure the state for navigation
    .config (['$stateProvider',function config ($stateProvider) {
                 $stateProvider.state ('privacy', {
                     url: '/privacy',
                     views: {
                         "main": {
                             controller: 'PrivacyCtrl',
                             templateUrl: 'pages/privacy/privacy.tpl.html'
                         }
                     },
                     data: {
                         pageTitle: 'Privacy Policy'
                     }
                 });
             }])

    // Controller
    .controller ('PrivacyCtrl', ['$scope', '$http', function PrivacyCtrl ($scope, $http) {

    }]);
