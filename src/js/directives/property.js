angular.module('angular-json-editor').directive('property', function() {
  return {
    restrict: 'E',
    templateUrl: '/src/partials/_property.html',
    scope: {
      name: '=',
      schema: '=',
      value: '='
    },
    controller: function($scope) {
      $scope.deleteProperty = function() {
        $scope.$parent.deleteProperty($scope.name);
      }
    }
  }
});
