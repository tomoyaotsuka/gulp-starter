# Gulp init project

## Spec

* Jade
* Sass (+Autoprefixer)
* Webpack (Babel + React)
* Imagefile Minify
* BrowserSync

## Usage

    $ npm install --global gulp
    $ cd (project folder)
    $ npm install
    $ gulp

## Author

### Tomoya Otsuka

I am a Designer.

* [Portfolio](http://strangr.jp)
* [twitter](https://twitter.com/tomoya_otsuka)
* [Pinterest](http://jp.pinterest.com/tomoyaotsuka/)

## License

Released under the MIT License: http://www.opensource.org/licenses/MIT

## Log

### 20160217

* コマンドライン引数による開発・本番環境とプロジェクトの指定

### 20160216

* JavaScriptライブラリの結合・圧縮
* ビルドタスク追加
* webpackにオプション追加（モジュールの重複回避、圧縮）
* デフォルトテンプレートのアップデート

### 20151211

* Jadeの継承などを含み、テンプレートをアップデート

### 20151210

* Add del
* Add gulp-watch（ファイルの新規追加も監視下）
* Add gulp-postcss&css-mqpacker（メディアクエリに関する記述を一元化）
* Add run-sequence（デフォルトの[gulp]タスクを直列/並列化）

### 20151209

* 画像圧縮のキャッシュがディレクトリ配下の同名ファイルにまで及んでしまうため、gulp-cacheからgulp-newerに変更

### 20151110

* npmをアップデート
* gulpfileの書式をBabelに変更
* EJSからJadeへ変更
* ディレクトリ構造を見直し

### 20150518

* First commit
