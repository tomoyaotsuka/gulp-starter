import webpack from 'webpack';

const projectName = '_oridinal';

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
    src:   [
      `${src}/assets/javascripts/libraries/jquery.pjax.min.js`,
      `${src}/assets/javascripts/libraries/jquery.preload.min.js`,
      `${src}/assets/javascripts/libraries/TweenLite.js`,
      `${src}/assets/javascripts/libraries/TimelineLite.js`,
      `${src}/assets/javascripts/libraries/CSSPlugin.min.js`
    ],
    dest:  `${dest}/assets/javascripts`,
    watch: `${src}/assets/javascripts/**/*.js`,
    name:  'libraries.js',
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
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
  },

  imagemin: {
    src:  `${src}/assets/images/**/*`,
    dest: `${dest}/assets/images/`
  },

  copy: {
    src: `${src}/assets/javascripts/libraries/**/*.js`,
    dest: dest
  }
};
