angular.module('app.pages.about', [
    'ui.router'
  ])
  // Configure the state for navigation
  .config(['$stateProvider', function config($stateProvider) {
    $stateProvider.state('about', {
      url: '/about',
      views: {
        "main": {
          controller: 'AboutCtrl',
          templateUrl: 'pages/about/about.tpl.html'
        }
      },
      data: {
        pageTitle: 'About us'
      }
    });
  }])

// Controller
.controller('AboutCtrl',['$scope', '$http', function AboutCtrl($scope, $http) {

    // PORTFOLIO
    $scope.team = [];
    $http.get('assets/scripts/team.json')
        .then(function(res) {
            $scope.team = res.data;
        });


}]);
