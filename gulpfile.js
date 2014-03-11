var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');



gulp.task('js', function() {
	gulp.src('./public/js/*.js')
		.pipe(concat('app.dist.js'))
		.pipe(gulp.dest('./public/js/dist'))
});




gulp.task('watch', function() {
	gulp.watch('./public/js/*.js', ['js']);
})


gulp.task('default', ['watch', 'js']);