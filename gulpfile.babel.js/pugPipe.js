/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const cachebust = require('gulp-cache-bust');

const pugPipe = () => src('src/views/pages/*.pug')
  .pipe(pug())
  .pipe(cachebust({ type: 'timestamp' }))
  .pipe(dest('public'));

module.exports = pugPipe;
