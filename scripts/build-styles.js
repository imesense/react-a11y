const { execSync } = require('child_process');

console.group('\nStarted build styles');

console.log('Stage 1: Prepare');
execSync('cross-env rm -rf ./dist/styles');

console.log('Stage 2: Copy SCSS to dist/styles/scss');
execSync('cross-env mkdir -p ./dist/styles/scss');
execSync('cp ./src/assets/styles/*.scss ./dist/styles/scss');

console.log('Stage 3: Build CSS');
[
  'a11y-font-sizes',
  'a11y-image-mode',
  'a11y-letter-spacing',
  'a11y-line-height',
  'a11y-schemas',
  'a11y-serif',
  'a11y',
].forEach(fileName => execSync(
  `node-sass ./src/assets/styles/${fileName}.scss -o ./dist/styles/css --output-style compressed`
));

console.log('Style build was completed successfully.');
console.groupEnd();
