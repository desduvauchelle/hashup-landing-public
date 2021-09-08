angular.module('directives.starfield', [])
    .directive('starfield', ['$document', '$window',function($document, $window) {
        var directive = {};

        directive.restrict = "A";
        directive.link = function(scope, element, attrs, ctrl) {
            var starfield = Site.starfield(attrs.id, "#FF4545", "#fff");
            starfield.start();
            // document.onmousemove = starfield.move;
            document.onkeypress = starfield.key_manager;
            document.onkeyup = starfield.release;
            // document.onmousewheel = starfield.mouse_wheel;
            // if (window.addEventListener) {
            //     window.addEventListener('DOMMouseScroll', starfield.mouse_wheel, false);
            // }
        };

        return directive;
    }]);
