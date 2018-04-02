var browserSync = require('browser-sync');
serve();

function serve()
{
	var server = browserSync.create();
	server.init(getServerConfig());

	function getServerConfig()
	{
		return {
			server         : true,
			reloadDebounce : 250,
			files          : ['**/*']
		};
	}
}