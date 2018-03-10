const sass = require('@stencil/sass');

exports.config = {
  namespace: 'avengers',
  bundles: [
    {
      components: [
        'my-component',
        'my-button'
      ]
    }
  ],
  plugins: [
    sass()
  ],
  generateDistribution: true,
  serviceWorker: false,
  buildDir: 'assets/build',
  collections: [
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
  fallback: './src/index.html'
};
