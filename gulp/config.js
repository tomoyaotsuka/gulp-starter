var path = require('path');

var projectName = 'project-name';

var src = './project/' + projectName + '/develop';
var dest = './project/' + projectName + '/public';
var relativeSrcPath = path.relative('.', src);


module.exports = {

  src: src,
  dest: dest,

  ejs: {
    src: [src + '/**/*.ejs', '!' + src + '/**/_*.ejs'],
    watch: src + '/**/*.ejs',
    json: src + '/data.json',
    dest: dest
  },

  css: {
    src: [src + '/assets/css/**/*.scss', '!' + src + '/**/lib/*.scss'],
    dest: dest + '/assets/css'
  },

  js: {
    src: src + '/assets/js/**/*.js',
    dest: dest + '/assets/js',
    uglify: true
  },

  webpack: {
    entry: src + '/assets/js/app.js',
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
          loader: 'babel-loader' // <- without es6 polyfills
          // loader: 'babel-loader?experimental&optional=runtime'
        }
      ]
    },
    devtool: 'source-map'
  },

  img: {
    src: src + '/assets/img/**',
    dest: dest + '/assets/img'
  },

  copy: {
    src: src + '/**/*.html',
    dest: dest
  }
};
