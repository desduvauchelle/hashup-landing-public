angular.module('pages.components.portfolioItem',[])
.directive('portfolioItem', function (){
  var directive = {};

  directive.restrict = "E";
  directive.templateUrl = "pages/components/portfolioItem/portfolioItem.tpl.html";

  return directive;
});
