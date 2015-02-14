controllers.controller('DashboardController', ['$scope', function($scope){
	
	$scope.sidebarCollapsed = false;
	$scope.navigation = [
		{
			type: 'category',
			title: 'Dashboard',
			options: [
				{
					title: 'Player Diagnostics',
					href: '/playerdiagnostics',
					id: 1
				},
				{
					title: 'Team Diagnostics',
					href: '#',
					id: 2
				},
				{
					title: 'League Diagnostics',
					href: '#',
					id: 3
				}
			],
			open: true,
			selected: true
		},
		{
			type: 'category',
			title: 'Statistics',
			options: [
				{
					title: 'Fan Support',
					href: '#',
					id: 4
				},
				{
					title: 'Media Coverage',
					href: '#',
					id: 5
				},
				{
					title: 'Salaries',
					href: '#',
					id: 6
				}
			],
			open: true,
			selected: false
		},
		{
			type: 'category',
			title: 'Schedules',
			options: [
				{
					title: 'Team Schedule',
					href: '#',
					id: 7
				},
				{
					title: 'Stadium Availability',
					href: '#',
					id: 8
				},
				{
					title: 'Events',
					href: '#',
					id: 9
				}
			],
			open: true,
			selected: false
		},
		{
			type: 'option',
			title: '',
			href: '#',
			id: 10
		}
	];

	$scope.toggleSidebarCollapsed = function(){
		$scope.sidebarCollapsed = !$scope.sidebarCollapsed;
		if($scope.sidebarCollapsed){
			for (var i = 0; i < $scope.navigation.length; i++) {
				if($scope.navigation[i].type == 'category'){
					$scope.navigation[i].open = false;
				}
			};
		}
	}

	$scope.adjustSelection = function(category, option){
		for (var i = 0; i < $scope.navigation.length; i++) {
			if($scope.navigation[i].type == 'category'){
				$scope.navigation[i].selected = false;
				for (var j = 0; j < $scope.navigation[i].options.length; j++) {
					$scope.navigation[i].options[j].selected = false;
				};
			}
		};
		category.selected = true;
		option.selected = true;
	}
	

	

}]);