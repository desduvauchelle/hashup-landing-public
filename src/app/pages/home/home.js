angular.module('app.pages.home', [
        'ui.router'
    ])
    // Configure the state for navigation
    .config(['$stateProvider', function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'pages/home/home.tpl.html'
                }
            },
            data: {
                pageTitle: 'HASHUP | Bringing ideas to life for experts and community leaders',
                doNoAppendCompanyName: true
            }
        });
    }])

// Controller
.controller('HomeCtrl', ['$scope', '$http', function HomeController($scope, $http) {
    // SKILLS
    $scope.skillsMoreShown = false;

    // PORTFOLIO
    $scope.hasMorePortfolio = false;
    $scope.portfolios = [];
    $http.get('assets/scripts/portfolios.json')
        .then(function(res) {
            var output = [];
            for (var i in res.data){
                output.push(res.data[i]);
                if(i == 3) {
                    $scope.hasMorePortfolio = true;
                    break;
                }
            }
            $scope.portfolios = output;
        });
}]);
