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

	function controller($rootScope, $state)
	{
		var ctrl = this;

		Object.assign(ctrl,
		{
			allowedUsers : /shubham|aniket|ved/,
			afterLogin
		});

		function afterLogin()
		{
			$rootScope.user = ctrl.email;
			$state.go('main.profile');
		}
	}
})();