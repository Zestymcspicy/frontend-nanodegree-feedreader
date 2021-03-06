var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
  gulp.watch('js/*.js').on('change', browserSync.reload);
  gulp.watch('index.html').on('change', browserSync.reload);
  gulp.watch('css/*.css').on('change', browserSync.reload);
  gulp.watch('jasmine/spec/feedreader.js').on('change', browserSync.reload);
  browserSync.init({
    server:  {
        baseDir: "./",
      }
  });
  });
