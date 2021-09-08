angular.module ('app.pages.style', [
    'ui.router'
])
    // Configure the state for navigation
    .config (['$stateProvider',function config ($stateProvider) {
                 $stateProvider.state ('style', {
                     url: '/style',
                     views: {
                         "main": {
                             controller: 'StyleCtrl',
                             templateUrl: 'pages/style/style.tpl.html'
                         }
                     },
                     data: {
                         pageTitle: 'Style guide'
                     }
                 });
             }])

    // Controller
    .controller ('StyleCtrl', ['$scope', '$http', function StyleCtrl ($scope, $http) {
        
    }]);
