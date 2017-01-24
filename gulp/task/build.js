var gulp = require("gulp"),
imagemin = require("gulp-imagemin"),
del = require("del"),
usemin = require("gulp-usemin"),
rev = require("gulp-rev"),
csso = require("gulp-csso"),
uglify = require("gulp-uglify"),
browserSync = require("browser-sync").create();

gulp.task("previewDocs", function() {
    //Define the main director to browser Sync
    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });
});

gulp.task("deletDocsFolder", ["icons"], function() {
    return del("./docs");
});

gulp.task("copyGeneralFiles", ["deletDocsFolder"], function() {
    var pathToCopy = [
        "./app/**/*",
        "!./app/index.html",
        "!./app/assets/pages/**",
        "!./app/assets/images/**",
        "!./app/assets/styles/**",
        "!./app/assets/scripts/**",
        "!./app/temp",
        "!./app/temp/**"
    ]

    return gulp.src(pathToCopy)
        .pipe(gulp.dest("./docs"))
});

gulp.task("optimizeImages", ["deletDocsFolder"], function() {
    return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/**/*"])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("useminTrigger", ["deletDocsFolder"], function() {
    gulp.start("usemin");
    gulp.start("pages");
});

gulp.task("usemin", ["styles", "scripts"], function() {
    return gulp.src("./app/index.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() {return csso()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest("./docs"));
});

gulp.task("pages", ["styles", "scripts"], function() {
    return gulp.src("./app/assets/pages/**/*.html")
        .pipe(usemin({
            css: [function() {return rev()}, function() {return csso()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest("./docs/assets/pages"));
});

gulp.task("build", ["deletDocsFolder", "copyGeneralFiles", "optimizeImages", "useminTrigger"]);
