var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create(),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cleancss = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  gulpif = require("gulp-if"),
  webpack = require("webpack-stream"),
  compiler = require("webpack");

//webpack config
let isDevelopmentMode = false;

webpackConfig = {
  mode: isDevelopmentMode ? "development" : "production",
  output: {
    filename: "main.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devtool: isDevelopmentMode ? "eval-source-map" : "none"
};

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
});

//SCSS to CSS
gulp.task("styles", function() {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", notify.onError()))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer(["last 10 versions"]))
    .pipe(
      gulpif(
        !isDevelopmentMode,
        cleancss({ level: { 1: { specialComments: 0 } } })
      )
    ) // Opt., comment out when debugging
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

//Vendor Scripts
gulp.task("scripts", function() {
  return (
    gulp
      .src([
        "app/libs/jquery/dist/jquery.min.js" //add more libs/scripts here
      ])
      .pipe(concat("scripts.min.js"))
      //.pipe(uglify()) // Minify js (opt.)
      .pipe(gulp.dest("app/js"))
      .pipe(browserSync.reload({ stream: true }))
  );
});

//HTML files => browser sync
gulp.task("code", function() {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

//Webpack entry: app/js-dev/common.js
gulp.task("webpack", function() {
  return gulp
    .src("app/js-dev/common.js")
    .pipe(
      webpack(webpackConfig),
      compiler
    )
    .on("error", function handleError() {
      this.emit("end"); // Recover from errors
    })
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.reload({ stream: true }));
});

//Watchers
gulp.task("watch", function() {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("styles"));
  gulp.watch("libs/**/*.js", gulp.parallel("scripts"));
  gulp.watch(["app/js-dev/**/*.js"], gulp.parallel("webpack"));
  gulp.watch("app/*.html", gulp.parallel("code"));
});

//Default (gulp) task
gulp.task(
  "default",
  gulp.parallel("styles", "scripts", "browser-sync", "watch")
);
