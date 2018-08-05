function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appCareers', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-careers/app-careers.html',
			controller : controller
		};
	}

	function controller()
	{
		var ctrl = this;
		ctrl.array = new Array(50);
	}
})();