const sass = require('@stencil/sass');

exports.config = {
  namespace: 'mycomponent',
  plugins: [
    sass()
  ],
  generateDistribution: true,
  serviceWorker: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
  fallback: './src/index.html'
};
