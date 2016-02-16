export default class Pjax {
  constructor(init) {
    this.init = init;
    this.set();
    this.fetch();
    this.render();
  }

  set() {
    $.preload({
      forward: $.pjax.follow,
      check: $.pjax.getCache,
      encode: true,
      ajax: {
        success: function ( data, textStatus, XMLHttpRequest ) {
          !$.pjax.getCache( this.url ) && $.pjax.setCache( this.url, null, textStatus, XMLHttpRequest );
        }
      }
    });
    $.pjax({
      area: '.inside',
      link: 'a:not([target],[rel])',
      load: { head: 'base, meta, link', css: false, script: false },
      cache: { click: true, submit: false, popstate: true },
      speedcheck: true,
      wait: 1000,
      callback: function() {}
    });
    $(document).bind('pjax:ready', function() {
      setTimeout(function () {
        $(document).trigger('preload');
      }, 2000);
  　});
  }

  fetch(init) {
    $(document).bind('pjax:fetch', function() {
    });
  }

  render(init) {
    var _this = this;
    $(document).bind('pjax:render', function() {
      _this.init.on($('.inside').attr('id'));
    });
  }
}
