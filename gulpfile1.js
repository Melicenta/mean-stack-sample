var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    less = require('gulp-less'),
    rimraf = require('rimraf'),
    LessPluginAutoprefix = require('less-plugin-autoprefix'),
    LessPluginClean = require('less-plugin-clean-css');

gulp.task('dev', ['modules', 'templates', 'images', 'scripts', 'styles'], function () {

});

gulp.task('clean', function (cb) {

  // return gulp.src(['./build'], {read: false}).pipe(rimraf());

  rimraf('./build', cb);
});

gulp.task('modules', ['clean'], function () {

  return gulp.src(['./src/main/modules/**/*'], {
    base: './src/main/modules'
  }).pipe(gulp.dest('./build/modules'));
});

gulp.task('templates', ['clean'],  function () {

  return gulp.src(['./src/main/resources/templates/**/*'], {
    base: './src/main/resources/templates'
  }).pipe(gulp.dest('./build/resources/templates'));
});

gulp.task('images', ['clean'],  function () {

  return gulp.src(['./src/main/resources/static/images/**/*'], {
    base: './src/main/resources/static/images'
  }).pipe(gulp.dest('./build/resources/static/images'));
});

gulp.task('scripts', ['clean'],  function() {

  return gulp.src(['./src/main/resources/static/scripts/application.js'])
      .pipe(browserify({
        options: {
          browserifyOptions: {
           debug: true
          }
        }
      }))
      .pipe(concat('bundle.js'))
      .pipe(ngAnnotate())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/resources/static/scripts'));
});

gulp.task('styles', ['clean'],  function () {

  autoprefix = new LessPluginAutoprefix({
    browsers: ["last 2 versions"]
  });

  clean = new LessPluginClean({
    advanced: true
  });

  return gulp.src(['./src/main/resources/static/styles/bundle.less'])
      .pipe(less({
        plugins: [autoprefix, clean]
      }))
      .pipe(gulp.dest('./build/resources/static/styles'));
});

gulp.task('default', ['dev']);
