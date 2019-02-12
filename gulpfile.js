const gulp = require('gulp');
const concat = require('gulp-concat');
 
gulp.task('pack-js', function () {    
    return gulp.src(['public/assets/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/build/js'));
});
 
gulp.task('pack-css', function () {    
    return gulp.src(['public/assets/css/*.css', 'public/assets/css/themes/*.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
});
 
gulp.task('default', ['pack-js', 'pack-css']);