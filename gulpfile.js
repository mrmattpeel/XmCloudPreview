/// <binding AfterBuild='Default' />
var gulp = require("gulp");
var foreach = require("gulp-foreach");
var newer = require("gulp-newer");
//var debug = require("gulp-debug");
//var header = require('gulp-header');
//var data = require('gulp-data');
//var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('Clear-Down-Configs', function () {
    var root = "./src/Platform/App_Config/Include/Custom/";
    var roots = [root + "/Feature", root + "/Foundation"];
    return gulp.src(roots, { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task("Copy-Configs",
    function () {
        var root = "/";
        var destination = "../src/Platform/App_Config";
        var roots = ["Feature/**/App_Config", "Foundation/**/App_Config", "!" + destination, "!" + "/**/tests/App_Config", "!" + "/**/obj/**/App_Config"];
        var files = "/**/*.{config,transform}";
        return gulp.src(roots, { base: root, allowEmpty: true }).pipe(
            foreach(function (stream, file) {
                console.log("Publishing from " + file.path);
                gulp.src(file.path + files, { base: file.path })
                    .pipe(newer(destination))
                    .pipe(debug({ title: "Copying " }))
                    .pipe(gulp.dest(destination));
                return stream;
            })
        );
    });