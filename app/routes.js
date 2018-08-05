angular.module('demoApp').config(config);

function config($stateProvider, $urlServiceProvider, $locationProvider)
{
  $locationProvider.html5Mode(true);
  $urlServiceProvider.rules.otherwise({ state: 'landing.login' });
  getStates().forEach(state => $stateProvider.state(state.name, state));

  function getStates()
  {
    return [
      {
        name: 'landing',
        url: '',
        component: 'appLanding',
        abstract: true
      },
      {
        name: 'landing.login',
        url: '/login',
        component: 'appLogin'
      },
      {
        name: 'landing.register',
        url: '/register',
        component: 'appRegister'
      },
      {
        name: 'main',
        url: '',
        component: 'appMain',
        abstract: true
      },
      {
        name: 'main.candidates',
        url: '/candidates',
        component: 'appCandidates'
      },
      {
        name: 'main.careers',
        url: '/careers',
        component: 'appCareers'
      },
      {
        name: 'main.profile',
        url: '/profile',
        component: 'appProfile'
      }
    ];
  }
}