angular.module('angular-json-editor').directive('jsonEditor', function($compile, $timeout) {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: '/src/partials/_json_editor.html',
    scope: {
      schema: '='
    },
    controller: function($scope) {
      $scope.json = {}
      $scope.addedPropertyNames = [];

      $scope.getAvailableProperties = function() {
        var availableProperties = [];
        angular.forEach($scope.schema.properties, function(_, name) {
          if ($scope.json[name] === undefined) {
            availableProperties.push(name);
          }
        });
        return availableProperties;
      }

      $scope.addProperty = function() {
        $timeout(function() {
          $scope.json[$scope.selectedPropertyName] = '';
          $scope.addedPropertyNames.push($scope.selectedPropertyName);
          $scope.selectedPropertyName = '';
        });
      }

      $scope.deleteProperty = function(propertyName) {
        $scope.addedPropertyNames.splice($scope.addedPropertyNames.indexOf(propertyName, 1));
        delete $scope.json[propertyName];
      }
    },
    link: function($scope, element, attr, ctrl) {
    }
  }
});
