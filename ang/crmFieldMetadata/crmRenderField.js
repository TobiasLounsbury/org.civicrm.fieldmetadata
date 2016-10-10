(function (angular, $, _) {
  angular.module('crmFieldMetadata').directive('crmRenderField', function() {
    return {
      restrict: 'A',
      scope: {
        field: '=crmRenderField',
        model: '=',
        parentModel: '=',
        prefix: '='
      },
      templateUrl: '~/crmFieldMetadata/crmRenderField.html',
      controller: ['$scope', '$element', '$sce', function crmRenderFieldController($scope, $element, $sce) {
        $element.addClass('crm-section');
        $scope.preText = $sce.trustAsHtml($scope.field.preText);
        $scope.postText = $sce.trustAsHtml($scope.field.postText);

        $scope.required = ($scope.field.required == "1");

        $scope.help = null;
        $scope.$watch('field', function(field) {
          if (field && field.help) {
            scope.help = field.help.clone({}, {
              title: field.label
            });
          }
        });
      }],
    };
  });
})(angular, CRM.$, CRM._);