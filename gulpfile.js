const { series, watch, src, dest } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat-css")
const replace = require("gulp-replace")
const server = require("browser-sync").create();

function style() {
    return src("source/sass/*/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(concat("index.css"))
        .pipe(replace('../font/', './'))
        .pipe(replace('content.blocks/', './'))
        .pipe(dest("dist/"));
}

function fonts() {
  return src('source/font/*.ttf')
    .pipe(dest('dist/'))
}

function images() {
    return src("source/image/*.svg,*.png")
      .pipe(dest('dist/'))
  }

function serve() {
    server.init({
        server: "dist/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    watch("source/sass/**/*.{scss,sass,html}").on("change", series(fonts, style));
}

exports.build = series(fonts, images, style)
exports.default = series(fonts, images, style, serve)