vireo.controller('SubmissionHistoryController', function ($controller, $scope, NgTableParams, StudentSubmissionRepo) {

	angular.extend(this, $controller('AbstractController', {$scope: $scope}));
	
	$scope.submissions = StudentSubmissionRepo.getAll();

	StudentSubmissionRepo.ready().then(function() {

		$scope.tableParams = new NgTableParams({}, {
			counts: [],
			filterDelay: 0, 
			dataset: $scope.submissions
	  	}); 

		$scope.tableParams.reload();

	})

	StudentSubmissionRepo.listen(function() {
	  	$scope.tableParams.reload();
	});

});