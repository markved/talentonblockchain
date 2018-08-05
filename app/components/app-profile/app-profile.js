function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appProfile', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-profile/app-profile.html'
		};
	}
})();