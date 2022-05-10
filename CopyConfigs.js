/// <binding AfterBuild='Default' />
var gulp = require("gulp");
var foreach = require("gulp-foreach");
var newer = require("gulp-newer");
var debug = require("gulp-debug");
var header = require('gulp-header');
var data = require('gulp-data');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('Clear-Down-Configs', function () {
    var root = "./src/Platform/App_Config/Include/Custom/";
    var roots = [root + "/Feature", root + "/Foundation"];
    return gulp.src(roots, { read: false, allowEmpty: true })
        .pipe(clean());
});