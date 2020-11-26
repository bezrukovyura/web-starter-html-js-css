const { src, task } = require('gulp');
const eslint = require('gulp-eslint');
const gulpStylelint = require('gulp-stylelint');

task('eslint', () => {
  return src(['./app/*.js'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

task('stylelint', function lintCssTask() {
  return src(['./app/*.css'])
    .pipe(gulpStylelint({
      failAfterError: true,
      reporters: [
        {formatter: 'verbose', console: true},
      ],
      debug: true
    }));
});