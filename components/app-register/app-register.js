function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appRegister', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-register/app-register.html',
			controller  : controller
		};
	}

	function controller($state)
	{
		var ctrl = this;
	}
})();