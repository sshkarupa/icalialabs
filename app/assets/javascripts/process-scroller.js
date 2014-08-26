/**
cbpFixedScrollLayout.js v1.0.0
http://www.codrops.com

Licensed under the MIT license.
http://www.opensource.org/licenses/mit-license.php

Copyright 2013, Codrops
http://www.codrops.com
*/

var cbpFixedScrollLayout;

cbpFixedScrollLayout = (function() {
  var changeNav, config, init, scrollAnim;
  init = function() {
    config.$container.css('height', '100%');
    config.$navlinks.on("click", function() {
      scrollAnim(config.$sections.eq($(this).index()).offset().top);
      return false;
    });
    config.$sections.waypoint(function(direction) {
      if (direction === "down") {
        changeNav($(this));
      }
    }, {
      offset: "30%"
    }).waypoint((function(direction) {
      if (direction === "up") {
        changeNav($(this));
      }
    }), {
      offset: "-30%"
    });
    $(window).on("debouncedresize", function() {
      scrollAnim(config.$sections.eq(config.currentLink).offset().top);
    });
  };
  changeNav = function($section) {
    config.$navlinks.eq(config.currentLink).removeClass("scroller-current");
    config.currentLink = $section.index("section");
    config.$navlinks.eq(config.currentLink).addClass("scroller-current");
  };
  scrollAnim = function(top) {
    config.$body.stop().animate({
      scrollTop: top
    }, config.animspeed, config.animeasing);
  };
  config = {
    $container: $('body.process').parents('html'),
    $sections: $("#process-scroller > section"),
    $navlinks: $("#process-scroller > nav:first > a"),
    currentLink: 0,
    $body: $(".process, html"),
    animspeed: 650,
    animeasing: "easeInOutExpo"
  };
  return {
    init: init
  };
})();
