function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appLanding', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-landing/app-landing.html',
			controller  : controller
		};
	}

	function controller($state)
	{
	}
})();