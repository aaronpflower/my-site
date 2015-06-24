// grab our gulp packages

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint'),
	stylus = require('gulp-stylus');

// create a default task and just log a message

// gulp.task('default', function() {
// 	return gutil.log('gulp is running!')
// });

// Define the deafault task and add the watch task
gulp.task('deafault', ['watch']);

// Configure the gulp task
gulp.task('jshint', function() {
	return gulp.src('client/js/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
	gulp.watch('client/js/**/*.js', ['jshint']);
});

// compile stylus to css
gulp.task('css', function() {
	return gulp.src('client/css/src/styles.styl')
	.pipe(stylus())
	.pipe(gulp.dest('client/css/lib'));
});