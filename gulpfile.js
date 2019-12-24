const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename')
const less = require('gulp-less')
const minifycss = require('gulp-minify-css')
const minifyhtml = require('gulp-minify-html')
const extender = require('gulp-html-extend')
const del = require('del')
const connect = require('gulp-connect')
const { src, dest, task, series, watch, parallel } = require('gulp')
    // 用来定义gulp的任务  
    // gulp.task()
    // 参数一:任务名字
    // 参数二:函数

// 任务需要加一个return
task('lib', function() {
        // gulp.src()  读取文件
        // gulp.pipe() 管道
        // gulp.dest() 放到哪里
        return src('./src/lib/**/*.*')
            .pipe(dest('./dist/lib'))
            // 让服务器重新加载
            .pipe(connect.reload())
    })
    // 处理js
task('js', function() {
    return src('./src/js/*.js')
        .pipe(dest('./dist/js'))
        // 对js代码进行丑化
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/js'))
        .pipe(connect.reload())
})

// 处理less
task('less', function() {
    return src('./src/less/*.less')
        // less转化成css
        .pipe(less())
        .pipe(dest('./dist/css'))
        // 压缩css
        .pipe(minifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('./dist/css'))
        .pipe(connect.reload())
})

// 处理图片
task('img', function() {
    return src('./src/img/*.*')
        .pipe(dest('./dist/img'))
        .pipe(connect.reload())
})

// 处理html
task('html', function() {
        return src('./src/*.html')
            .pipe(extender())
            .pipe(minifyhtml())
            .pipe(dest('./dist'))
            .pipe(connect.reload())
    })
    // 清除dist
task('clean', function() {
        return del('./dist')
    })
    // 实现一个,修改代码,会自动执行任务
    // 监听任务
task('watch', function() {
        // 参数一:监事的文件  参数二:对应的任务,可以是多个,用数组
        watch('./src/**/*.html', series('html'))
        watch('./src/less/*.less', series('less'))
        watch('./src/js/*.js', series('js'))
        watch('./src/lib/**/*.*', series('lib'))
        watch('./src/img/*.*', series('img'))
    })
    // 定义任务,自动刷新 
task('connect', function() {
        return connect.server({
            // 服务器的根目录
            root: './dist',
            livereload: true,
            port: 9999
        })
    })
    // 设置默认项  series可以组合多个任务

// parallel  可以并行执行任务,会把多个任务组合成更大的任务
task('default', series('clean', 'html', 'less', 'js', 'img', 'lib', parallel('watch', 'connect')))