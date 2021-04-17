/*** plugins ***/
const del = require('del')
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const cssWrap = require('gulp-css-wrap')
const cleanCss = require('gulp-clean-css')

// 清理任务：清空result目录
gulp.task('clean-result', async () => del('./result/**'))

// 清理任务：删除temp.css
gulp.task('clean-temp', async () => del('./result/temp.css'))

// 编译任务：将sass编译为css，并将临时css文件存储至temp目录
gulp.task('sass-to-css', () =>
  gulp
    .src('./theme/element-variables.scss')
    .pipe(sass())
    .pipe(rename('temp.css'))
    .pipe(gulp.dest('./result'))
)

// 拷贝任务：将fonts文件夹拷贝至result目录下
gulp.task('copy-font', () =>
  gulp.src(['./node_modules/element-plus/lib/theme-chalk/fonts/**']).pipe(gulp.dest('result/fonts'))
)

// 处理任务：为css添加命名空间，并压缩代码
gulp.task('css-wrap', () =>
  gulp
    .src('./result/temp.css')
    .pipe(cssWrap({ selector: '.' + process.argv[2].replace('--', '') }))
    .pipe(cleanCss())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./result'))
)

gulp.task(
  'default',
  gulp.series('clean-result', 'sass-to-css', gulp.parallel('css-wrap', 'copy-font'), 'clean-temp')
)
