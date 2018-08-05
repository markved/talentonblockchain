function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appLogin', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-login/app-login.html',
			controller  : controller
		};
	}

	function controller($state)
	{
		var ctrl = this;

		Object.assign(ctrl, { goToCandidates });

		function goToCandidates()
		{
			$state.go('main.candidates');
		}
	}
})();