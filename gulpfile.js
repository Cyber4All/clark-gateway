const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');
var exec = require('child_process').exec;
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('tsc', () => {
  let failed = false;

  const tsResult = tsProject
    .src()
    .pipe(tsProject())
    .once('error', function() {
      this.once('finish', () => process.exit(1));
    });

  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['tsc'], () => {
  gulp.watch('src/**/*.ts', ['tsc']);
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES).pipe(gulp.dest('dist'));
});

gulp.task('start', ['watch'], function() {
  nodemon({
    script: 'dist/app.js',
    ext: 'js html',
    watch: ['./dist'],
  });
});

gulp.task('default', ['watch', 'assets']);
