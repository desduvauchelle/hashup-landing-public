angular.module ('app', [
    // Load the constants
    'app.constants.config',
    // Load the templates
    'templates-app',
    // Load libraries
    'nzSweetAlert',
    // Directives
    'directives.fullHeight',
    'directives.starfield',
    'directives.wave',
    // Load the services
    'app.services.public',
    // Load components
    'pages.components.navHeader',
    'pages.components.footer',
    'pages.components.portfolioItem',
    // Load controllers for the different pages
    'app.pages.style',
    'app.pages.home',
    'app.pages.mvp',
    'app.pages.about',
    'app.pages.contact',
    'app.pages.packages',
    'app.pages.portfolio',
    'app.pages.started',
    'app.pages.terms',
    'app.pages.privacy',
    'app.pages.ux',
    // Angular libs
    'ui.router'
])

    .config (['CONFIG', '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function myAppConfig (CONFIG, $stateProvider, $urlRouterProvider, $httpProvider) {
            // Sets the default page.
            $urlRouterProvider.otherwise (CONFIG.homePage);
        }
    ])

    .run (function run () {
          })

    .controller ('AppCtrl', ['$scope', '$location', 'CONFIG',  '$http', '$window',
        function AppCtrl ($scope, $location, CONFIG, $http, $window) {

            $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                // Scroll to top
                $window.scrollTo(0, 0);
                // Page meta data
                $scope.pageTitle = CONFIG.appName;
                $scope.pageDescription = CONFIG.defaultPageDescription;
                $scope.pageKeywords = CONFIG.defaultPageKeywords;
                if (angular.isDefined (toState.data.pageTitle)) {
                    var appendName = ' | ' + CONFIG.appName;
                    if (angular.isDefined (toState.data.doNoAppendCompanyName)) {
                        appendName = "";
                    }
                    $scope.pageTitle = toState.data.pageTitle + appendName;
                }
                if (angular.isDefined (toState.data.pageDescription)) {
                    $scope.pageTitle = toState.data.pageDescription;
                }
                if (angular.isDefined (toState.data.pageKeywords)) {
                    $scope.pageKeywords = toState.data.pageKeywords;
                }
            });

            //$http.get('https://api.github.com/users/naorye/repos').then(function(response) {
            //    var time = response.config.responseTimestamp - response.config.requestTimestamp;
            //    nzSwal(time / 1000);
            //});


        }]);
