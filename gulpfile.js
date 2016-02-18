var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('css/'));
});

gulp.task('watch',  ['styles'], function() {
	gulp.watch('scss/**/*.scss', ['styles'], function () {
		gulp.src('scss/main.scss')
			.pipe(sass())
			.pipe(gulp.dest('css/'));
  	});
});

gulp.task('default', ['watch'], function() {
});