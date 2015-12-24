function phonelistCtrl($scope, $http, $stateParams) { //$stateParams:路由传过来的参数
	$http.get('data/phones' + $stateParams.phoneType + '.json').success(function(data) {
		$scope.phones = data;
	});
	$scope.orderProp = "price";
}