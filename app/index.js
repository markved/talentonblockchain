function IIFE(initModule)
{
	initModule();
}(function initModule()
{
	angular.module('demoApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.bootstrap.modal']);
})();