(function() {
	'use strict';

	angular
		.module('tornano')
		.controller('appController', appController);

	appController.$inject = [
		'$scope',
		'$rootScope',
		'$window',
		'Auth',
		'Session'
	];

	function appController($scope, $rootScope, $window, Auth, Session) {
		$scope.currentUser = angular.fromJson(sessionStorage.user);
		//console.log($scope.currentUser);
		if ($scope.currentUser) {
			Session.userId = $scope.currentUser._id;
		}

		$scope.username = "Timmy";

		$scope.isAuthenticated = Auth.isAuthenticated;

		$scope.setCurrentUser = function(user) {
			$scope.currentUser = user;
		};

		(function() {
			$rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
				var requireLogin = toState.data.requireLogin;
				var isIndex = toState.data.isIndex;

				if (isIndex) $window.location.href = '/home';

				// if (requireLogin && !$scope.isAuthenticated()) {
				// 	event.preventDefault();
				// 	$window.location.href = '/login';
				// }
			});
		})();

	}
})();