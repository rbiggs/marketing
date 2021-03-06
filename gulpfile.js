const gulp = require('gulp')
const browserSync = require('browser-sync')
const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const gzip = require('gulp-gzip')
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const pkg = require('./package.json')
const minify = require('rollup-plugin-babel-minify')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

gulp.task('build:sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['build:sass']);
})

gulp.task('build:js', function(done) {
  rollup.rollup({
    input: './src/js/app.js',
    plugins: [
      babel(),
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      minify({
        mangle: { topLevel: true },
        comments: false
      })
    ]
  })
    .then((bundle) => {
      return bundle.write({
        format: 'iife',
        name: 'app',
        file: './dist/js/app.js',
        sourcemap: true
      })
    })
    .then((bundle) => {
      return gulp.src('./dist/js/app.js')
        .pipe(gzip({ extension: 'gzip' }))
        .pipe(gulp.dest('./dist/js'))
    })
    .then((bundle) => {
      done();
    })
})

gulp.task('move-images', function(done) {
  gulp.src(['./src/images/*', './src/images/**/*'])
    .pipe(gulp.dest('./dist/images'))
  done()
})


const server = browserSync.create();

function reload() {
  server.reload();
}

function serve(done) {
  server.init({
    port: 4040,
    server: {
      open: false,
      baseDir: './'
    }
  })
  done()
}

gulp.task('watch', function(done) {
  gulp.watch('./index.html').on('change', reload)
  gulp.watch(['./src/js/app.js', 'src/js/**/*']).on('change', gulp.series('build:js', reload))
  gulp.watch('./src/sass/**/*.scss').on('change', gulp.series('build:sass', reload))
  done()
})

// Process app.js and load page in browser:
gulp.task('default', gulp.series('build:js', 'build:sass', 'move-images', 'watch', serve), function(done) {
  done()
})

gulp.task('fresh-build', gulp.series('build:js', 'build:sass', 'move-images'), function(done) {
  done()
})

// Create production-ready version of this project.
gulp.task('production', function(done) {
  const name = pkg.name + '-production'
  gulp.src(['./dist/**/*', './dist/**/**/*'])
    .pipe(gulp.dest(`../${name}/dist`))
  gulp.src('./index.html')
    .pipe(gulp.dest(`../${name}`))
  done()
})
