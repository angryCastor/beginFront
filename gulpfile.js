var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');



gulp.task('styles', function(){
    return gulp.src(['./app/scss/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }));
});



gulp.task('browser-sync', function () {
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});



gulp.task('watch', ['browser-sync', 'styles'], function () {
    gulp.watch('app/scss/**/*.scss', ['styles']);
    gulp.watch('app/*.html', browserSync.reload);
});