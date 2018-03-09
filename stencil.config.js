const sass = require('@stencil/sass');

exports.config = {
  namespace: 'my-component',
  bundles: [
    {
      components: ['my-component']
    }
  ],
  plugins: [
    sass()
  ],
  generateDistribution: true,
  serviceWorker: false,
  buildDir: 'build',
  collections: [
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
