angular.module('directives.wave', [])
    .directive('wave', function() {
        var directive = {};

        directive.restrict = "A";
        directive.link = function(scope, element, attrs, ctrl) {
            var wave = Site.wave(attrs.id, attrs.colorWater);
            wave.initialize();
        };

        return directive;
    });
