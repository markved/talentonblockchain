function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appMain', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-main/app-main.html'
		};
	}
})();