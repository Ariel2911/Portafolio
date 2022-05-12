/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const purgecss = require('gulp-purgecss');

const purgecssPipe = () => src('public/styles/styles.css')
  .pipe(purgecss({ content: ['public/*.html'] }))
  .pipe(dest('public/styles'));

module.exports = purgecssPipe;
