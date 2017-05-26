var gulp = require('gulp');
// Change code to browser readable format
var browserify = require('browserify');
// put browserified files into one file
var source = require('vinyl-source-stream');


gulp.task('jsBrowserify', function() {
	return browserify({entries: ['./js/git-interface.js']})
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./build/js'));
});