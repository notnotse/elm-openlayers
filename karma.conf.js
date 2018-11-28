module.exports = function(config) {
  config.set({
    browsers : ['Chrome'],
    concurrency: 1,
    files: [
      'src/*.spec.js'
    ],
    client: {
      useIframe: true
    },
    frameworks: ['jasmine'],
    autoWatch: true,
    preprocessors: {
      'src/*.js': [ 'webpack' ]
    },
    webpack: {
      mode: 'development'
    }
  });
};
