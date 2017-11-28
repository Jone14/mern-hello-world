"use strict"


var gulp = require('gulp');
var conn = require('gulp-connect');
var open = require('gulp-open');

var config = {
  port: 5500,
  baseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    indexJs: './src/index.js',
    dist: './dist'
  }
}

gulp.task('conn', function(){
  conn.server({
    root: ['dist'],
    port: config.port,
    base: config.baseUrl,
    livereload: true
  });
});

gulp.task('open', ['conn'], function(){
  gulp.src('dist/index.html')
    .pipe(open({uri: config.baseUrl + ':' + config.port + '/'}));
});

gulp.task('html',function(){
    gulp.src(config.paths,html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(conn.reload());
});

gulp.task('js',function(){
  browserify(config.paths.indexJs)
    .transform(reactify)
    .bundle()
    .on('error',console.error.bind(console))
    .pipe(gulp.dest(config.paths.dist))
      .pipe(conn.reload());
});

gulp.task('default',['html', 'open']);
