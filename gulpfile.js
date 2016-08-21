var gulp = require('gulp'),
    connect = require('gulp-connect');



// 本地启动服务
gulp.task('connect', function(){
	connect.server({
		root: 'src',
		port: '9000',
		livereload: true,
	})
})

gulp.task('html', function(){
	gulp.src('./src/*.html')
		.pipe(connect.reload());
})

gulp.task('default', ['connect'])
