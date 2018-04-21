function IIFE(initComponent)
{
	initComponent();
} (function initComponent()
{
	angular.module('demoApp').component('appFetchData', getComponentObject());

	function getComponentObject()
	{
		return {
			bindings: {
				resolve : '<',
				close   : '&',
				dismiss : '&'
			},
			templateUrl : './components/app-fetch-data/app-fetch-data.html',
		};
	}
})();