/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoPrefixer = require('autoprefixer');

const cssPlugins = [cssnano(), autoPrefixer()];

const sassGulp = (stream) => src('src/scss/*.scss')
  .pipe(sass())
  .pipe(postcss(cssPlugins))
  .pipe(dest('public/styles'))
  .pipe(stream());

module.exports = sassGulp;
