/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

const babel = require('gulp-babel');

const jsPipe = () => src('src/js/*.js')
  .pipe(babel({ presets: ['@babel/preset-env'] }))
  .pipe(concat('index.js'))
  .pipe(terser())
  .pipe(dest('public/js'));

module.exports = jsPipe;
