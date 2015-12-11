const projectName = '_default';

const src = `./project/${projectName}/develop`;
const dest = `./project/${projectName}/public`;

// var path = require('path');
// var relativeSrcPath = path.relative('.', src);

module.exports = {
  src: src,
  dest: dest,

  jade: {
    src:   [ `${src}/views/**/*.jade`, `!${src}/views/application/*.jade`, `!${src}/views/layouts/*.jade` ],
    watch: [ `${src}/views/**/*.jade`, `${src}/resources/*.json` ],
    json:  `${src}/resources/data.json`,
    dest:  dest
  },

  css: {
    src:   `${src}/assets/stylesheets/application.scss`,
    watch: `${src}/assets/stylesheets/**/*.scss`,
    dest:  `${dest}/assets/stylesheets`
  },

  js: {
    src:  `${src}/assets/javascripts/**/*.js`,
    dest: `${dest}/assets/javascripts`,
    uglify: true
  },

  webpack: {
    entry: `${src}/assets/javascripts/app.js`,
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true
          }
        }
      ]
    },
    devtool: 'source-map'
  },

  imagemin: {
    src:  `${src}/assets/images/**/*`,
    dest: `${dest}/assets/images/`
  },

  copy: {
    src: `${src}/assets/javascripts/libraries/*.js`,
    dest: `${dest}/assets/javascripts/libraries/`
  }
};
