var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

// 编译 sass 文件
gulp.task('buildSass', function(){
	gulp.src('build/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
})

gulp.task('sassWatch', function(){
	gulp.watch('build/**/*.scss', ['buildSass']);
})



// 本地启动服务
gulp.task('connect', function(){
	connect.server({
		root: 'src',
		port: '8000',
		livereload: true
	})
})

gulp.task('html', function(){
	gulp.src('./src/*.html')
		.pipe(connect.reload());
})

gulp.task('default', ['connect', 'sassWatch'])
