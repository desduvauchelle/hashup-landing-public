angular.module ('app.pages.terms', [
    'ui.router'
])
    // Configure the state for navigation
    .config (['$stateProvider',function config ($stateProvider) {
                 $stateProvider.state ('terms', {
                     url: '/terms',
                     views: {
                         "main": {
                             controller: 'TermsCtrl',
                             templateUrl: 'pages/terms/terms.tpl.html'
                         }
                     },
                     data: {
                         pageTitle: 'Terms of Service'
                     }
                 });
             }])

    // Controller
    .controller ('TermsCtrl', ['$scope', '$http', function TermsCtrl ($scope, $http) {

    }]);
