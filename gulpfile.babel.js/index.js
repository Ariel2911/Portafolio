/* eslint-disable import/no-extraneous-dependencies */
const { watch } = require('gulp');

const { init, stream, reload } = require('browser-sync');

const pugPipe = require('./pugPipe');
const sassPipe = require('./sassPipe');

const jsPipe = require('./jsPipe');

const purgecssPipe = require('./purgecssPipe');

const build = () => {
  purgecssPipe();
};

const dev = () => {
  init({ server: './public' });

  watch('src/views/**/*.pug', pugPipe).on('change', reload);
  watch('src/scss/**/*.scss', () => sassPipe(stream));

  watch('src/js/*.js', jsPipe).on('change', reload);
};

module.exports = { build, dev };
