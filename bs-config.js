var historyApiFallback = require('connect-history-api-fallback');

module.exports =
{
	"server":
	{
		"baseDir" : "./app",
		"routes"  : {
			"/node_modules" : "node_modules"
		},
		"middleware" : [historyApiFallback()]
	}
};