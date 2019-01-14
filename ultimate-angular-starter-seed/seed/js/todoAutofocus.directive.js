function todoAutofocus() {
  return {
    restrict: 'A', // Match directive to element by attribute name
    scope: false,
    link: function($scope, $element, $attrs) {
      $scope.$watch($attrs.todoAutofocus, function (newValue, oldValue) {
        if (!newValue) return;

        // Use setTimeout to push focus() to the end of the call stack
        setTimeout(function () {
          $element[0].focus();
        }, 0);
      });
    }
  }
}

angular
  .module('app')
  .directive('todoAutofocus', todoAutofocus);
