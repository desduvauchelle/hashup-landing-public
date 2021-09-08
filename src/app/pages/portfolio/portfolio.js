angular.module ('app.pages.portfolio', [
    'ui.router'
])
    // Configure the state for navigation
    .config (['$stateProvider',function config ($stateProvider) {
                 $stateProvider.state ('portfolio', {
                     url: '/portfolio/:id',
                     views: {
                         "main": {
                             controller: 'PortfolioCtrl',
                             templateUrl: 'pages/portfolio/portfolio.tpl.html'
                         }
                     },
                     data: {
                         pageTitle: 'Success stories'
                     }
                 });
             }])

    // Controller
    .controller ('PortfolioCtrl', ['$scope', '$http', '$stateParams', '$sce', function PortfolioCtrl ($scope, $http, $stateParams, $sce) {
        var projectId = $stateParams.id;

        $scope.hasFocus = (projectId !== "");
        $scope.sectionTitle = $sce.trustAsHtml("Made with <i class=\"fa fa-heart\"></i> by HASHUP");
        if(projectId !== ""){
            $scope.sectionTitle = $sce.trustAsHtml("Also made with <i class=\"fa fa-heart\"></i> by HASHUP");
        }
        // PORTFOLIO
        $scope.portfolios = [];
        $http.get('assets/scripts/portfolios.json')
            .then(function(res) {
                var output = [];
                for (var i in res.data){
                    if(res.data[i].id === projectId){
                        $scope.focusProject = res.data[i];
                        $scope.hasFocus = true;
                        continue;
                    }
                    output.push(res.data[i]);
                }
                $scope.portfolios = output;
            });
    }]);
