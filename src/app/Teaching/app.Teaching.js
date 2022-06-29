angular.module('app.Teaching', [])
  .directive('myTeaching', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'src/app/Teaching/Teaching.tpl.html'
    };
  });