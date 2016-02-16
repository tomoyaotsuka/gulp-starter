import pjax      from './modules/pjax';
import getQuery  from './modules/getQuery';
import stagger   from './modules/stagger';
import index     from './pages/index';
import about     from './pages/about';


$(function() {
  var init = new Init();
  init.on($('.inside').attr('id'));

  new pjax(init);
});


class Init {

  /**
   * 全ページ共通設定
   * @constructor
   **/

  constructor() {
  }

  /**
   * 各ページで起動する関数
   * @switch
   **/

  on(target) {

    switch (target) {
      case 'index':
        new index();
        return;
      case 'about':
        new about();
        return;
      default :
        return;
    }
  }
}
