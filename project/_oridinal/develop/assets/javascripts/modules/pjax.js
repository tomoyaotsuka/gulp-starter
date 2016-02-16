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
      callback: function() {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M8MNRD');
      }
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
