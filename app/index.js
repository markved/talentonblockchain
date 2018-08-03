function IIFE(initModule)
{
	initModule();
}(function initModule()
{
	angular.module('demoApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.bootstrap.modal']).config(config).run(run);

	function config($stateProvider, $urlServiceProvider, $locationProvider)
	{
		$locationProvider.html5Mode(true);
		$urlServiceProvider.rules.otherwise({ state: 'landing.login' });
		getStates().forEach(state => $stateProvider.state(state.name, state));

		function getStates()
		{
			return [
				{
					name      : 'landing',
					url       : '',
					component : 'appLanding',
					abstract  : true
				},
				{
					name      : 'landing.login',
					url       : '/login',
					component : 'appLogin'
				},
				{
					name      : 'landing.register',
					url       : '/register',
					component : 'appRegister'
				},
				{
					name      : 'candidates',
					url       : '/candidates',
					component : 'appCandidates'
				}
			];
		}
	}

	function run()
	{

	}
})();