function IIFE(initComponent)
{
	initComponent();
}(function initComponent()
{
	angular.module('demoApp').component('appProfile', getComponentObject());

	function getComponentObject()
	{
		return {
			templateUrl : './components/app-profile/app-profile.html',
			controller  : controller
		};
	}

	function controller($rootScope, $state)
	{
		var ctrl = this;
		var user = $rootScope.user;

		if(!user)
		{
			$state.go('landing.login');
			return;
		}

		Object.assign(
			ctrl,
			{
				user:
				{
					name     : $rootScope.user,
					imageURL : '../../images/user-default.png'
				},
				fillDataFromLinkedIn
			}
		);

		function fillDataFromLinkedIn()
		{
			Object.assign(ctrl, setData(user));
		}

		function setData(user)
		{
			return {
				user:
				{
					imageURL: getImageURL(user),
					name    : getName(user)
				}
			};

			function getImageURL(user)
			{
				switch(user)
				{
					case 'shubham': return '../../images/shubham.jpg';

					case 'aniket': return '../../images/aniket.jpg';

					case 'ved': return '../../images/ved.jpg';
				}
			}

			function getName(user)
			{
				switch(user)
				{
					case 'shubham' : return 'Shubham Shah';
					case 'aniket' : return 'Aniket Sinha';
					case 'ved' : return 'Ved Mishra';
				}
			}
		}
	}
})();