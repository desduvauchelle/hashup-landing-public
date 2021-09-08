angular.module('pages.components.navHeader', [

])

.directive('navHeader', function() {
    var directive = {};

    directive.restrict = "E";
    directive.templateUrl = "pages/components/navHeader/navHeader.tpl.html";
    directive.controller = ['$scope', '$location', 'CONFIG', function navHeaderCtrl($scope, $location, CONFIG, authenticationService) {

        $scope.isCollapsed = false;

        $scope.getPage = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active";
            } else {
                return "";
            }
        };

        $scope.isNotHomePage = function() {
            if ($location.path() !== "/home") {
                return "active";
            } else {
                return "";
            }
        };

        $scope.appName = CONFIG.appName;
    }];

    return directive;
});
