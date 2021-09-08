angular.module('pages.components.footer',[])
.directive('footer',['$location', function($location){
  var directive = {};

  directive.restrict = "E";
  directive.templateUrl = "pages/components/footer/footer.tpl.html";
  directive.link = function(scope, element, attrs) {
      scope.showStarted = function(){
          if($location.path().indexOf('started') === -1){
              return true;
          } else {
              return false;
          }
      };
  };
  return directive;
}]);
