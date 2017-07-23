const path = require('path');

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const ghPages = require('gulp-gh-pages');
const sass = require('gulp-sass');

const BUILD_FOLDER = path.join(__dirname, 'build');


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
  return gulp.src('styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(BUILD_FOLDER));
});

gulp.task('sass-dev', () => {
  return gulp.src('styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(__dirname));
});

gulp.task('dev', () => {
  gulp.watch('styles.scss', ['sass-dev']);
});

gulp.task('deploy', ['html', 'js', 'images', 'sass'], () => {
  return gulp.src(path.join(BUILD_FOLDER, '**', '*'))
    .pipe(ghPages());
});
