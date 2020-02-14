const gulp   = require('gulp'),
      concat = require('gulp-concat'),
      prefx = require('gulp-autoprefixer'),
      live = require('gulp-livereload'),
      pug = require('gulp-pug'),
      scss = require('gulp-sass'),
      maps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      babel = require('gulp-babel');
  //  plugin
gulp.task('plugin',()=>{
    return gulp.src('stage/plugin/**/*.*')
                .pipe(gulp.dest('dist/plugin'))
})
gulp.task('test',()=>{
    return gulp.src('stage/plugin/**/*.*')
                .pipe(gulp.dest('dist/plugin'))
})


// html task
gulp.task('html', ()=>{
    return gulp.src('stage/**/*.pug')
           .pipe(pug({pretty:true}))
           .pipe(gulp.dest('dist'))
           .pipe(live())
})
// html task
gulp.task('img', ()=>{
    return gulp.src('stage/img/*.*')
           .pipe(gulp.dest('dist/img'))
           .pipe(live())
})
// css task
gulp.task('css',()=>{
    return gulp.src('stage/css/**/*.scss')
                .pipe(maps.init())
                .pipe(scss({outputStyle:'compressed'}))
                .pipe(prefx('last 2 versions'))
                .pipe(concat('app.min.css'))
                .pipe(maps.write('.'))
                .pipe(gulp.dest('dist/css'))
                .pipe(live())
})
// css bootsrap
// my js
gulp.task('js',()=>{
    return gulp.src('stage/js/**/*.js')
                .pipe(maps.init())
                .pipe(concat('app.min.js'))
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(uglify())
                .pipe(maps.write('.'))
                .pipe(gulp.dest('dist/js'))
                .pipe(live())
})
/* watch all task*/
gulp.task('watch',()=>{
    require('./server.js')
    live.listen()
    gulp.watch('stage/**/*.pug', gulp.series('html'));
    gulp.watch('stage/**/*.scss',gulp.series('css'));
    gulp.watch('stage/**/*.js',gulp.series('js'));
    gulp.watch('stage/plugin/**/*.*',gulp.series('plugin'))
})
gulp.task('default',gulp.parallel('watch','css','js','html','plugin'))
