angular.module('app.Research', [])
  .directive('myResearch', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/Research/Research.tpl.html'
    };
  });