function IIFE(initModule)
{
	initModule();
}(function initModule()
{
	angular.module('demoApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.bootstrap.modal']).config(config).run(run);

	function config($stateProvider, $urlServiceProvider)
	{
		$urlServiceProvider.rules.otherwise({ state: 'login' });
		getStates().forEach(state => $stateProvider.state(state.name, state));

		function getStates()
		{
			return [
				{
					name      : 'login',
					url       : '/login',
					component : 'appLogin'
				},
				{
					name      : 'register',
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