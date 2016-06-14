//set up route so you can create your own templates and route things through.
angular.module('linkDemo', [])

.directive('customDirective' function(){
	return {
		restrict: 'EA',
		//'E' sets this directive so that it can be used as either an element
		link: function(scope, element, attrs){
		scope.initial = "hello world!";
		scope.afterwards = function(changes) {
			$scope.name = changes;
			}
		},
		template: 'template.html'
	}
})

.controller('AppController', ['$scope', function(){
	$scope.initial = "This is before the change";
}]);

//