var gulp = require('gulp'),
  browserify = require('browserify'),
  jade = require('gulp-jade'),
  source = require('vinyl-source-stream');

gulp.task('default', ['watch']);

gulp.task('compile', ['js', 'markup', 'meshes']);

gulp.task('js', function () {

  var bundleStream = browserify('./src/js/base.js').bundle();

  bundleStream
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dest/www/js'));
});

gulp.task('meshes', function () {

  gulp.src('./src/meshes/*.js')
    .pipe(gulp.dest('dest/www/meshes'));

});

gulp.task('markup', function () {

  return gulp.src('src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dest/www'));
});

gulp.task('watch', ['compile'], function () {

  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/*.jade', ['markup']);

});
