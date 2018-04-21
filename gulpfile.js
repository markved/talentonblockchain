'use strict';

var pump         = require('pump');
var browserSync  = require('browser-sync');
var gulp         = require('gulp');
var $            = require('gulp-load-plugins')();

var server = browserSync.create();
var baseDir = './app';
gulp.task('serve', gulp.series(sass, serve));

/* SERVER TASKS */

function sass(callback)
{
	return pump(
		[
			gulp.src(`${baseDir}/**/*.scss`),
			$.sourcemaps.init({loadMaps : true}),
			$.sass({outputStyle : 'expanded'}),
			$.sourcemaps.write('./'),
			gulp.dest(baseDir),
			server.stream({match: '*.css'})
		],
		callback
	);
}

function serve()
{
	server.init(require('./bs-config'));
	gulp.watch([`${baseDir}/**/*.scss`], sass);
	gulp.watch([`${baseDir}/**/*.html`, `${baseDir}/**/*.js`]).on('change', server.reload);
}