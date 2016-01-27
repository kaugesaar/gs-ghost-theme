var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('css', function() {
	gulp.src('./src/less/app.less')
		.pipe(less())
		.pipe(minifyCSS())
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function() {
    gulp.watch('./src/less/**/*.less', ['css']);
    gulp.watch('./src/less/blog/*.less', ['css']);
});
