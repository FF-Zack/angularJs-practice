function phonedetailCtrl($scope, $http, $stateParams) {
	$http.get('data/phones_data/' + $stateParams.phoneId + '.json').success(function(data) {
		$scope.phone = data;
		console.log("aa");
	})
}