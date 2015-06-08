var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    rimraf = require('rimraf'),
    LessPluginAutoprefix = require('less-plugin-autoprefix'),
    LessPluginClean = require('less-plugin-clean-css');

gulp.task('dev', ['clean', 'modules', 'templates', 'images', 'scripts', 'styles'], function () {

});

gulp.task('clean', function () {

  rimraf('./build');
});

gulp.task('modules', function () {

  gulp.src(['src/main/modules'])
    .pipe(gulp.dest(['build/modules']));
});

gulp.task('templates', function () {

  gulp.src(['src/main/resources/templates'])
    .pipe(gulp.dest(['build/resources/templates']));
});

gulp.task('images', function () {

  gulp.src(['src/main/resources/static/images'])
    .pipe(gulp.dest(['build/resources/static/images']));
});

gulp.task('scripts', function() {

  gulp.src(['src/main/resources/static/scripts/application.js'])
      .pipe(browserify({
        insertGlobals: true,
        debug: false
      }))
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('build/resources/static/scripts'));
});

gulp.task('styles', function () {

  autoprefix = new LessPluginAutoprefix({
    browsers: ["last 2 versions"]
  });
  clean = new LessPluginClean({
    advanced: true
  });
  gulp.src(['src/main/resources/static/styles/bundle.less'])
      .pipe(less({
        plugins: [autoprefix, clean]
      }))
      .pipe(gulp.dest('build/resources/static/styles'));
});

gulp.task('default', ['dev']);
