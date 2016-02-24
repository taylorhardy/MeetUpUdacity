//controller for app
//all code is either using the angular.js, angular material design, bootstrap frameworks or my own work.
var appControllers = angular.module('appControllers', []);

appControllers.controller('appControllers', ['$scope', '$uibModal', '$log', '$rootScope', function ($scope, $uibModal, $log, $rootScope) {
	$rootScope.signedIn = false;
	$rootScope.showMore = false;
	$rootScope.hideAdd = true;
	$rootScope.attending = false;
	$scope.search = "";

	$scope.events = [{
		eventName: 'Brunch this weekend?',
		eventType: 'Birthday',
		capacity: '20',
		location: 'Ihop Tulsa',
		startTime: "10am",
		endTime: "12pm",
		description: "Meet for brunch at ihop",
		createdBy: "John Smith",
		going: ["John"],
		attending: false
	}, {
		eventName: 'Graduation Party',
		eventType: 'Graduation Party ',
		capacity: '200',
		location: 'Steves house',
		startTime: '10pm',
		endTime: "2am",
		description: "Celebrate steves graduation",
		createdBy: "Steven hopkins",
		going: ["steve"],
		attending: false
	}, {
		eventName: 'Anniversary Party for Helen and Joe',
		eventType: 'Anniversary Party',
		capacity: '100',
		location: 'Tulsa Event Center',
		startTime: "3pm",
		endTime: "6pm",
		description: "",
		createdBy: "Joe Simmons",
		going: ["Joe", "Helen"],
		attending: false
	}, {
		eventName: 'Brunch this weekend?',
		eventType: 'Birthday',
		capacity: 'Min Li Chan',
		location: '3:08PM',
		startTime: " I'll be in your neighborhood doing errands",
		endTime: "",
		description: "",
		createdBy: "John Smith",
		going: ["Taylor", "John"],
		attending: false
	}];

	$rootScope.addEvent = function () {
		var tempObject = {
			eventName: $rootScope.eventName,
			eventType:  $rootScope.eventType,
			capacity: $rootScope.capacity,
			location: $rootScope.location,
			startTime: $rootScope.startTime,
			endTime: $rootScope.endTime,
			description: $rootScope.description,
			createdBy: $rootScope.user.firstName + " " + $rootScope.user.lastName,
			going: []
		};
		$scope.events.push(tempObject);
		console.log("the following event was added", tempObject);
		$rootScope.eventName = "";
		$rootScope.eventName = "";
		$rootScope.capacity = "";
		$rootScope.location = "";
		$rootScope.startTime = "";
		$rootScope.endTime = "";
		$rootScope.description = "";
	};
		$rootScope.addGoing = function(index){
			var name = $rootScope.user.firstName;
			$scope.events[index].going.push(name);
			console.log(index);
			$scope.events[index].attending = true;
		};
	$rootScope.toggleEvent = function () {
		if ($rootScope.showMore == true) {
			$rootScope.showMore = false;
		} else {
			$rootScope.showMore = true;
		}
		$rootScope.hideAdd = true;
	};

	//sign in modal
	$scope.items = ['item1', 'item2', 'item3'];

	$scope.animationsEnabled = true;

	$scope.SignUp = function (size) {

		var modalInstance = $uibModal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'partials/SignInModal.html',
			controller: 'ModalInstanceCtrl',
			size: size,
			resolve: {
				items: function () {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};

	$scope.toggleAnimation = function () {
		$scope.animationsEnabled = !$scope.animationsEnabled;
	};

}]);

appControllers.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $rootScope) {
	$scope.ok = function () {
		$rootScope.signedIn = true;
		$rootScope.hideAdd = false;
		$uibModalInstance.close();
	};
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
});
