function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appCandidates', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-candidates/app-candidates.html',
			controller : controller
		};
	}

	function controller($http, $timeout, $uibModal)
	{
		var ctrl = this;

		ctrl.initDT = function(last)
		{
			if(!last) return;
			$timeout(() => $('#table').DataTable({
				columnDefs : [{sortable:false, targets:-1}]
			}));
		}

		ctrl.fetchData = function(candidate)
		{
			$uibModal.open({
				component : 'appFetchData',
				animation : false,
				resolve : {candidate : ()=>candidate}
			});
		}

		$http.get('./data/candidates.json').then(function(response){
			ctrl.candidates = response.data;
			ctrl.candidates.forEach(v => v.ApplicationDate = new Date(v.ApplicationDate));
		});
	}
})();