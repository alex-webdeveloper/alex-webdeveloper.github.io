const fs = require('fs');

const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const pug = require('gulp-pug');
const newer = require('gulp-newer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const autopref = require('autoprefixer');
const postcss = require('gulp-postcss');


gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/assets/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        // .pipe(autoprefixer())
        // .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(postcss([ autopref({ grid: 'autoplace'}) ]))
        .pipe(gulp.dest("./assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('compilePug', function () {
    return gulp.src(['./src/**/*.pug', '!./src/includes/**/*.pug'])
        .pipe(
            pug({
                locals: {
                    // nav: JSON.parse(fs.readFileSync('./data/nav.json', 'utf8')),
                },
                pretty: true,
            })
        )
        .pipe(gulp.dest('./'));
});

gulp.task('scripts', function () {
    return gulp.src("src/assets/js/**/*.js")
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename('script.js'))
        .pipe(gulp.dest("./assets/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("src/assets/fonts/**/*")
        .pipe(gulp.dest("./assets/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/assets/icons/**/*")
        .pipe(newer('./assets/icons'))
        .pipe(imagemin())
        .pipe(gulp.dest("./assets/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/assets/img/**/*")
        .pipe(newer('./assets/img'))
        .pipe(imagemin())
        .pipe(gulp.dest("./assets/img"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/assets/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/**/*.pug").on('change', gulp.parallel('compilePug'));
    gulp.watch("src/assets/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/assets/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/assets/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/assets/img/**/*").on('add', gulp.parallel('images'));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'compilePug', 'images'));