var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minifycss', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('js', function() {
  return gulp.src([
      './theme/metronic_v4.7.5/theme/assets/global/plugins/jquery.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/bootstrap/js/bootstrap.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/js.cookie.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/bootstrap-sweetalert/sweetalert.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/bootstrap-modal/js/bootstrap-modalmanager.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/bootstrap-modal/js/bootstrap-modal.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/datatables/datatables.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/scripts/app.min.js',
      './theme/metronic_v4.7.5/theme/assets/pages/scripts/ui-sweetalert.min.js',
      './theme/metronic_v4.7.5/theme/assets/global/plugins/select2/js/select2.js',
      './js/layout.js'
    ])
    .pipe(concat('app.js'))
    .pipe(uglify('app.min.js'))
    .pipe( gulp.dest('./dist/'))
});

// Watch task
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['dist'])
})
