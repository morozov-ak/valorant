const gulp = require('gulp')
const gulpSass = require('gulp-sass')
const browserSync = require('browser-sync').create()

function style(){
    return gulp.src('scss/**/*.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream())
}

function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })
    gulp.watch('scss/**/*.scss',style);
    gulp.watch('*.html').on('change',browserSync.reload)
    gulp.watch('js/*.js').on('change',browserSync.reload)

}

exports.style = style;
exports.watch = watch;
