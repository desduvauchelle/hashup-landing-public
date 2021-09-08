angular.module('directives.fullHeight', [])
    .directive('fullHeight', ['$window',function($window) {
        var directive = {};

        directive.restrict = "A";
        directive.link = function(scope, element) {
            scope.initializeWindowSize = function() {
                $(element).css('height', $window.innerHeight);
            };
            scope.initializeWindowSize();
            angular.element($window).bind('resize', function() {
                scope.initializeWindowSize();
            });
        };

        return directive;
    }]);
