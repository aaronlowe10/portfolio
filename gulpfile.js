const path = require('path');

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const ghPages = require('gulp-gh-pages');
const sass = require('gulp-sass');

const BUILD_FOLDER = path.join(__dirname, 'build');
const MAIN_STYLE_FILE = path.join(__dirname, 'styles', 'styles.scss');


gulp.task('html', () => {
  return gulp.src('index.html')
    .pipe(gulp.dest(BUILD_FOLDER));
});

gulp.task('js', () => {
  return gulp.src('script.js')
    .pipe(gulp.dest(BUILD_FOLDER));
});

gulp.task('images', () => {
  return gulp.src(path.join('images', '**', '*'))
    .pipe(gulp.dest(path.join(BUILD_FOLDER, 'images')));
});

gulp.task('sass', () => {
  return gulp.src(MAIN_STYLE_FILE)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(BUILD_FOLDER));
});

gulp.task('cname', () => {
  return gulp.src('CNAME')
    .pipe(gulp.dest(BUILD_FOLDER));
});

gulp.task('sass-dev', () => {
  return gulp.src(MAIN_STYLE_FILE)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(__dirname));
});

gulp.task('dev', () => {
  gulp.watch(path.join('styles', '*'), ['sass-dev']);
});

gulp.task('deploy', ['html', 'js', 'images', 'sass', 'cname'], () => {
  return gulp.src(path.join(BUILD_FOLDER, '**', '*'))
    .pipe(ghPages({
      branch: 'master'
    }));
});
