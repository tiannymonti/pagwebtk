const gulp = require('gulp');
const concat = require('gulp-concat');


let indexCss = ['public/assets/css/bootstrap.min.css', 'public/assets/css/animate.min.css', 'public/assets/css/owl.carousel.min.css', 
    'public/assets/css/owl.theme.default.min.css', 'public/assets/css/general-style.css', 
    'public/assets/css/noty.css', 'public/assets/css/themes/semanticui.css', 
    'public/assets/css/index-style.css', 'public/assets/css/responsive.css'];

let indexJs = ['public/assets/js/jquery.min.js', 'public/assets/js/popper.min.js', 
    'public/assets/js/bootstrap.min.js', 'public/assets/js/carousel.js',
    'public/assets/js/owl.carousel.min.js', 'public/assets/js/wow.min.js', 
    'public/assets/js/menu.js', 'public/assets/js/noty.js', 
    'public/assets/js/general-script.js', 'public/assets/js/index-script.js'];

let productCss = ['public/assets/css/bootstrap.min.css', 'public/assets/css/animate.min.css', 'public/assets/css/product-style.css', 
    'public/assets/css/responsive.css', 'public/assets/css/general-style.css'];

let productJs = ['public/assets/js/jquery.min.js', 'public/assets/js/popper.min.js', 
    'public/assets/js/bootstrap.min.js', 'public/assets/js/wow.min.js',
    'public/assets/js/menu.js', 'public/assets/js/general-script.js'];

 
gulp.task('pack-js-index', function () {    
    return gulp.src(indexJs)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/build/js'));
});
 
gulp.task('pack-css-index', function () {    
    return gulp.src(indexCss)
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('pack-js-products', function () {    
    return gulp.src(productJs)
        .pipe(concat('bundle_p.js'))
        .pipe(gulp.dest('public/build/js'));
});
 
gulp.task('pack-css-products', function () {    
    return gulp.src(productCss)
        .pipe(concat('stylesheet_p.css'))
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('default', ['pack-js-index', 'pack-css-index', 'pack-js-products', 'pack-css-products']);