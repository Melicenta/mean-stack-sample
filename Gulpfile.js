var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

gulp.task('dev', ['browserify'], function () {

});

gulp.task('browserify', function() {
  gulp.src(['scr/main/resources/static/scripts/script-1.js'])
      .pipe(browserify({
        insertGlobals: true,
        debug: false
      }))
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('scr/main/resources/static/scripts'));
});

gulp.task('default', ['dev']);
