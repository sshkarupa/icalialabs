var idx, idxs, ignore, rule, scrollToTop, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;

$(document).bind("mobileinit", function() {
  $.mobile.hidePageLoadingMsg();
  $.mobile.ajaxEnabled = false;
  $.mobile.loadingMessage = false;
});

scrollToTop = function() {
  var element, offset, offsetTop, verticalOffset;
  verticalOffset = (typeof verticalOffset !== "undefined" ? verticalOffset : 0);
  element = $("body");
  offset = element.offset();
  offsetTop = offset.top;
  $("html, body").animate({
    scrollTop: offsetTop
  }, 500, "linear");
};

jQuery(document).ready(function() {
  var isMobile;
  $(document).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".to-top").addClass("show");
      $('.engage').addClass('animated bounceInUp');
      $('.experience').addClass('animated bounceInUp');
      $('.knowledge').addClass('animated bounceInUp');
    } else {
      $(".to-top").removeClass("show");
      $('.engage').removeClass('animated bounceInUp');
      $('.experience').removeClass('animated bounceInUp');
      $('.knowledge').removeClass('animated bounceInUp');
    }
  });
  $(".to-top").on("click", scrollToTop);
  $(".animsition").animsition({
    inClass: "zoom-in",
    outClass: "zoom-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    touchSupport: true,
    loading: true,
    loadingParentElement: "body",
    loadingClass: "animsition-loading",
    unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"]
  });
  setTimeout((function() {
    return $(".load-mask").fadeOut("slow");
  }), 900);
  isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };
  if (isMobile.any() !== null) {
    $('html').addClass('no-hover');
  }
  $('.burger').on('click', function(e) {
    $('.menu-overlay').toggleClass('show-menu');
    $('.menu-content').toggleClass('show-menu animated bounceInDown');
    $('.main-menu').toggleClass('active');
    $('.burger').toggleClass('active');
    $('.burger > .one').toggleClass('one-active');
    $('.burger > .two').toggleClass('hide-two');
    $('.burger > .three').toggleClass('three-active');
    return e.preventDefault();
  });
  $('.mask, span.circle').on('click', function(e) {
    var mask;
    if ($(this).hasClass('mask')) {
      mask = $(this);
    } else {
      mask = $(this).siblings('.expand-content');
    }
    mask.toggleClass('expand-content');
    mask.siblings('.mask').toggleClass('hide');
    mask.siblings('.mask').children('.skill').toggleClass('hide-all');
    mask.children('.skill').children('.col-2').children('.more').toggleClass('push-front');
    if (mask.children('.technology').length > 0) {
      mask.siblings('.fusion.circle').toggleClass('move-left');
    } else {
      mask.siblings('.fusion.circle').toggleClass('move-right');
    }
    if (mask.siblings('.fusion.circle').hasClass('move-left') || $(this).siblings('.fusion.circle').hasClass('move-right')) {
      return mask.siblings('.fusion.circle')[0].innerHTML = 'X';
    } else {
      return mask.siblings('.fusion.circle')[0].innerHTML = "<span>Perfect Fusion</span>";
    }
  });
  return $('.testimonials .picture .testimonial-photo').on('click', function(e) {
    $('.testimonials .picture .testimonial-photo').removeClass('active');
    $(this).addClass('active');
    $('.quote-container').removeClass('active');
    return $('.quote-container.' + $(this)[0].id).toggleClass('active');
  });
});

if ($('body').hasClass('no-hover')) {
  ignore = /:hover\b/;
  try {
    _ref = document.styleSheets;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      stylesheet = _ref[_i];
      console.log(document.styleSheets);
      idxs = [];
      _ref1 = stylesheet.cssRules;
      for (idx = _j = 0, _len1 = _ref1.length; _j < _len1; idx = ++_j) {
        rule = _ref1[idx];
        if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
          idxs.unshift(idx);
        }
      }
      for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
        idx = idxs[_k];
        stylesheet.deleteRule(idx);
      }
    }
  } catch (_error) {}
}

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*!
 * animsition v3.2.1
 * http://blivesta.github.io/animsition/
 * Licensed under MIT
 * Author : blivesta
 * http://blivesta.com/
 */
(function($) {
  "use strict";
  var namespace = "animsition";
  var methods = {
    init: function(options) {
      options = $.extend({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 1500,
        outDuration: 800,
        linkElement: ".animsition-link",
        touchSupport: true,
        loading: true,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        unSupportCss: [ "animation-duration", "-webkit-animation-duration", "-o-animation-duration" ]
      }, options);
      var support = methods.supportCheck.call(this, options);
      if (support === false) {
        if (!("console" in window)) {
          window.console = {};
          window.console.log = function(str) {
            return str;
          };
        }
        console.log("Animsition does not support this browser.");
        return methods.destroy.call(this);
      }
      var bindEvts = "click." + namespace;
      if (options.touchSupport) {
        bindEvts += " touchend." + namespace;
      }
      if (options.loading === true) {
        methods.addLoading.call(this, options);
      }
      return this.each(function() {
        var _this = this;
        var $this = $(this);
        var $window = $(window);
        var data = $this.data(namespace);
        if (!data) {
          options = $.extend({}, options);
          $this.data(namespace, {
            options: options
          });
          $window.on("load." + namespace, function() {
            methods.pageIn.call(_this);
          });
          $window.on("unload." + namespace, function() {});
          $(options.linkElement).on(bindEvts, function(event) {
            event.preventDefault();
            var $self = $(this);
            methods.pageOut.call(_this, $self);
          });
        }
      });
    },
    supportCheck: function(options) {
      var $this = $(this);
      var props = options.unSupportCss;
      var propsNum = props.length;
      var support = false;
      if (propsNum === 0) {
        support = true;
      }
      for (var i = 0; i < propsNum; i++) {
        if (typeof $this.css(props[i]) === "string") {
          support = true;
          break;
        }
      }
      return support;
    },
    addLoading: function(options) {
      $(options.loadingParentElement).append('<div class="' + options.loadingClass + '"></div>');
    },
    removeLoading: function() {
      var $this = $(this);
      var options = $this.data(namespace).options;
      var $loading = $(options.loadingParentElement).children("." + options.loadingClass);
      $loading.remove();
    },
    pageInClass: function() {
      var $this = $(this);
      var options = $this.data(namespace).options;
      var thisInClass = $this.data("animsition-in");
      var inClass;
      if (typeof thisInClass === "string") {
        inClass = thisInClass;
      } else {
        inClass = options.inClass;
      }
      return inClass;
    },
    pageInDuration: function() {
      var $this = $(this);
      var options = $this.data(namespace).options;
      var thisInDuration = $this.data("animsition-in-duration");
      var inDuration;
      if (typeof thisInDuration === "number") {
        inDuration = thisInDuration;
      } else {
        inDuration = options.inDuration;
      }
      return inDuration;
    },
    pageIn: function() {
      var _this = this;
      var $this = $(this);
      var options = $this.data(namespace).options;
      var inClass = methods.pageInClass.call(_this);
      var inDuration = methods.pageInDuration.call(_this);
      if (options.loading === true) {
        methods.removeLoading.call(_this);
      }
      $this.css({
        "animation-duration": inDuration / 1e3 + "s"
      }).addClass(inClass);
      setTimeout(function() {
        $this.removeClass(inClass).css({
          opacity: 1
        });
      }, inDuration);
    },
    pageOutClass: function($self) {
      var $this = $(this);
      var options = $this.data(namespace).options;
      var selfOutClass = $self.data("animsition-out");
      var thisOutClass = $this.data("animsition-out");
      var outClass;
      if (typeof selfOutClass === "string") {
        outClass = selfOutClass;
      } else if (typeof thisOutClass === "string") {
        outClass = thisOutClass;
      } else {
        outClass = options.outClass;
      }
      return outClass;
    },
    pageOutDuration: function($self) {
      var $this = $(this);
      var options = $this.data(namespace).options;
      var selfOutDuration = $self.data("animsition-out-duration");
      var thisOutDuration = $this.data("animsition-out-duration");
      var outDuration;
      if (typeof selfOutDuration === "number") {
        outDuration = selfOutDuration;
      } else if (typeof thisOutDuration === "number") {
        outDuration = thisOutDuration;
      } else {
        outDuration = options.outDuration;
      }
      return outDuration;
    },
    pageOut: function($self) {
      var _this = this;
      var $this = $(this);
      var url = $self.attr("href");
      var outClass = methods.pageOutClass.call(_this, $self);
      var outDuration = methods.pageOutDuration.call(_this, $self);
      $this.css({
        "animation-duration": outDuration / 1e3 + "s"
      }).addClass(outClass);
      setTimeout(function() {
        location.href = url;
      }, outDuration);
    },
    destroy: function() {
      return this.each(function() {
        var $this = $(this);
        $(window).unbind("." + namespace);
        $this.removeClass(namespace).removeData(namespace);
      });
    }
  };
  $.fn.animsition = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jQuery." + namespace);
    }
  };
})(jQuery);

window.Furatto = {
  name: 'Furatto',
  version: '1.0.0'
};

$('.alert .close').each(function() {
  return $(this).click(function(e) {
    e.preventDefault();
    return $(this).parent().fadeOut();
  });
});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __slice = [].slice;

(function($, window, document) {
  "use strict";
  var defaults, pluginName;
  pluginName = 'suraido';
  defaults = {
    speed: 500,
    delay: 3000,
    pause: false,
    loop: false,
    enableKeys: true,
    enableDots: true,
    enableArrows: true,
    prev: '',
    next: '',
    fluid: true,
    starting: false,
    completed: false,
    easing: 'swing',
    autoplay: false,
    paginationClass: 'pagination',
    paginationItemClass: 'dot',
    arrowsClass: 'arrows',
    arrowClass: 'arrow'
  };
  Furatto.Suraido = (function() {
    function Suraido(el, options) {
      var weakSelf,
        _this = this;
      this.el = el;
      this.prev = __bind(this.prev, this);
      this.next = __bind(this.next, this);
      this.stop = __bind(this.stop, this);
      this.play = __bind(this.play, this);
      this.to = __bind(this.to, this);
      this._createArrows = __bind(this._createArrows, this);
      this._createPagination = __bind(this._createPagination, this);
      this._enableBindKeys = __bind(this._enableBindKeys, this);
      this._enablesFluidBehavior = __bind(this._enablesFluidBehavior, this);
      this._enablesAutoPlay = __bind(this._enablesAutoPlay, this);
      this._setsMainElement = __bind(this._setsMainElement, this);
      this._setsItems = __bind(this._setsItems, this);
      this.$el = $(this.el);
      this.options = $.extend({}, defaults, options);
      this.itemsWrapper = this.$el.find('>ul');
      this.maxSize = {
        width: this.$el.outerWidth() | 0,
        height: this.$el.outerHeight() | 0
      };
      weakSelf = this;
      this.items = $(this.itemsWrapper).find('>li').each(function(index) {
        var $this, height, width;
        $this = $(this);
        width = $this.outerWidth();
        height = $this.outerHeight();
        if (width > weakSelf.maxSize.width) {
          weakSelf.maxSize.width = width;
        }
        if (height > weakSelf.maxSize.height) {
          return weakSelf.maxSize.height = height;
        }
      });
      this.itemsLength = this.items.length;
      this.currentItemIndex = 0;
      this.items.find('.caption').css({
        width: "" + (100 / this.itemsLength) + "%"
      });
      this._setsMainElement();
      this.itemsWrapper.css({
        position: "relative",
        left: 0,
        width: "" + (this.itemsLength * 100) + "%"
      });
      this._setsItems();
      if (this.options.autoplay) {
        this._enablesAutoPlay();
      }
      if (this.options.enableKeys) {
        this._enableBindKeys();
      }
      this.options.enableDots && this._createPagination();
      this.options.enableArrows && this._createArrows();
      if (this.options.fluid) {
        this._enablesFluidBehavior();
      }
      if ($.event.special['swipe'] || $.Event('swipe')) {
        this.$el.on('swipeleft swiperight swipeLeft swipeRight', function(e) {
          if (e.type.toLowerCase() === 'swipeleft') {
            return _this.next();
          } else {
            return _this.prev();
          }
        });
      }
    }

    Suraido.prototype._setsItems = function() {
      return this.items.css({
        float: 'left',
        width: "" + (100 / this.itemsLength) + "%"
      });
    };

    Suraido.prototype._setsMainElement = function() {
      return this.$el.css({
        width: this.maxSize.width,
        height: this.items.first().outerHeight(),
        overflow: 'hidden'
      });
    };

    Suraido.prototype._enablesAutoPlay = function() {
      var _this = this;
      return setTimeout(function() {
        if (_this.options.delay | 0) {
          _this.play();
          if (_this.options.pause) {
            return _this.$el.on('mouseover, mouseout', function(event) {
              _this.stop();
              return event.type === 'mouseout' && _this.play();
            });
          }
        }
      }, this.options.autoPlayDelay | 0);
    };

    Suraido.prototype._enablesFluidBehavior = function() {
      var _this = this;
      return $(window).resize(function() {
        _this.resize && clearTimeout(_this.resize);
        return _this.resize = setTimeout(function() {
          var style, width;
          style = {
            height: _this.items.eq(_this.currentItemIndex).outerHeight() + 30
          };
          width = _this.$el.outerWidth();
          _this.itemsWrapper.css(style);
          style['width'] = "" + (Math.min(Math.round((width / _this.$el.parent().width()) * 100), 100)) + "%";
          return _this.$el.css(style, 50);
        });
      }).resize();
    };

    Suraido.prototype._enableBindKeys = function() {
      var _this = this;
      return $(document).on('keydown', function(event) {
        switch (event.which) {
          case 37:
            return _this.prev();
          case 39:
            return _this.next();
          case 27 || 32:
            return _this.stop();
        }
      });
    };

    Suraido.prototype._createPagination = function() {
      var html,
        _this = this;
      html = "<ol class='" + this.options.paginationClass + "'>";
      $.each(this.items, function(index) {
        return html += "<li class='" + (index === _this.currentItemIndex ? _this.options.paginationItemClass + ' active' : _this.options.paginationItemClass) + "'> " + (++index) + "</li>";
      });
      html += "</ol>";
      return this._bindPagination(this.options.paginationClass, this.options.paginationItemClass, html);
    };

    Suraido.prototype._createArrows = function() {
      var html;
      html = "<div class=\"";
      html = html + this.options.arrowsClass + "\">" + html + this.options.arrowClass + " prev hidden-on-small hidden-on-xsmall\">" + this.options.prev + "</div>" + html + this.options.arrowClass + " next hidden-on-small hidden-on-xsmall\">" + this.options.next + "</div></div>";
      return this._bindPagination(this.options.arrowsClass, this.options.arrowClass, html);
    };

    Suraido.prototype._bindPagination = function(className, itemClassName, html) {
      var weakSelf;
      weakSelf = this;
      return this.$el.addClass("has-" + className).append(html).find("." + itemClassName).click(function() {
        var $this;
        $this = $(this);
        if ($this.hasClass(weakSelf.options.paginationItemClass)) {
          return weakSelf.stop().to($this.index());
        } else if ($this.hasClass('prev')) {
          return weakSelf.prev();
        } else {
          return weakSelf.next();
        }
      });
    };

    Suraido.prototype.to = function(index, callback) {
      var easing, obj, speed, target,
        _this = this;
      if (this.t) {
        this.stop();
        this.play();
      }
      target = this.items.eq(index);
      $.isFunction(this.options.starting) && !callback && this.options.starting(this.$el, this.items.eq(this.currentItemIndex));
      if (!(target.length || index < 0) && this.options.loop === false) {
        return;
      }
      if (index < 0) {
        index = this.items.length - 1;
      }
      speed = callback ? 5 : this.options.speed | 0;
      easing = this.options.easing;
      obj = {
        height: target.outerHeight() + 30
      };
      if (!this.itemsWrapper.queue('fx').length) {
        this.$el.find("." + this.options.paginationItemClass).eq(index).addClass('active').siblings().removeClass('active');
        return this.$el.animate(obj, speed, easing) && this.itemsWrapper.animate($.extend({
          left: "-" + index + "00%"
        }, obj), speed, easing, function(data) {
          _this.currentItemIndex = index;
          return $.isFunction(_this.options.complete) && !callback && _this.options.complete(_this.el, target);
        });
      }
    };

    Suraido.prototype.play = function() {
      var _this = this;
      return this.t = setInterval(function() {
        return _this.to(_this.currentItemIndex + 1);
      }, this.options.delay | 0);
    };

    Suraido.prototype.stop = function() {
      this.t = clearInterval(this.t);
      return this;
    };

    Suraido.prototype.next = function() {
      if (this.currentItemIndex === (this.itemsLength - 1)) {
        return this.stop().to(0);
      } else {
        return this.stop().to(this.currentItemIndex + 1);
      }
    };

    Suraido.prototype.prev = function() {
      return this.stop().to(this.currentItemIndex - 1);
    };

    return Suraido;

  })();
  $.fn[pluginName] = function(options) {
    var args, sliders, _;
    sliders = this.length;
    _ = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return this.each(function(index) {
      var instance, key, me, plugin;
      me = $(this);
      plugin = $.data(this, "plugin_" + pluginName);
      if (!plugin) {
        key = "suraido" + (sliders > 1 ? '-' + ++index : '');
        instance = new Furatto.Suraido(this, options);
        return me.data(key, instance).data('key', key);
      } else if ((plugin[_] != null) && $.type(plugin[_]) === 'function') {
        return plugin[_].apply(plugin, args);
      }
    });
  };
  Furatto.Suraido.version = "1.0.0";
  return $(document).ready(function() {
    return $('[data-suraido]').each(function() {
      return $(this).suraido();
    });
  });
})($, window, document);

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

(function($, window) {
  Furatto.Modal = (function() {
    function Modal(el, options) {
      this.hideOnDocumentClick = __bind(this.hideOnDocumentClick, this);
      this.hideOnEsc = __bind(this.hideOnEsc, this);
      this.show = __bind(this.show, this);
      this.init = __bind(this.init, this);
      this.options = $.extend({}, options);
      this.$el = $(el);
      this.modal = $(this.$el.data('target'));
      this.close = this.modal.find('.modal-close');
      this.transition = this.$el.data('transition') || "1";
      this.theme = this.$el.data('theme') || "default";
      this.modal.addClass("modal-effect-" + this.transition);
      this.modal.addClass("" + this.theme);
    }

    Modal.prototype.init = function() {
      var _this = this;
      console.log(this.modal);
      this.$el.click(this.show);
      return this.close.click(function(ev) {
        ev.stopPropagation();
        return _this.hide();
      });
    };

    Modal.prototype.show = function(ev) {
      if (this.$el.is('div')) {
        this.$el.addClass('modal-show');
      } else {
        this.modal.addClass('modal-show');
      }
      $('.modal-overlay').addClass('modal-show-overlay');
      $('body').bind('keyup', this.hideOnEsc);
      return $('body').bind('click', this.hideOnDocumentClick);
    };

    Modal.prototype.hideOnEsc = function(event) {
      if (event.keyCode === 27) {
        return this.hide();
      }
    };

    Modal.prototype.hideOnDocumentClick = function(event) {
      if ($(event.target).is('.modal-overlay')) {
        return this.hide();
      }
    };

    Modal.prototype.hide = function() {
      $('.modal-overlay').removeClass('modal-show-overlay');
      if (this.$el.is('div')) {
        this.$el.removeClass('modal-show');
      } else {
        this.modal.removeClass('modal-show');
      }
      $('body').unbind('keyup', this.hideOnEsc);
      return $('body').unbind('click', this.hideOnDocumentClick);
    };

    return Modal;

  })();
  $.fn.modal = function(option) {
    return this.each(function() {
      var $this, data, options;
      $this = $(this);
      data = $this.data('modal');
      options = $.extend({}, $this.data(), typeof option === 'object' && option);
      if (!data) {
        $this.data('modal', (data = new Furatto.Modal(this, options)));
      }
      if (typeof option === 'string') {
        return data[option]();
      }
    });
  };
  Furatto.Modal.version = "1.0.0";
  $(document).ready(function() {
    var elementToAppend;
    if ($('.off-screen').length > 0) {
      elementToAppend = $('.off-screen');
    } else {
      elementToAppend = $('body');
    }
    elementToAppend.append('<div class="modal-overlay"></div>');
    return $('[data-furatto="modal"]').each(function() {
      var modal;
      modal = $(this);
      return modal.modal('init');
    });
  });
  return $(document).on('click', '[data-furatto="modal"]', function(e) {
    var $this;
    $this = $(this);
    return $this.modal('init');
  });
})(window.jQuery, window);

var cinemaJs, onYouTubePlayerAPIReady, player;

onYouTubePlayerAPIReady = function() {
  var player;
  player = new YT.Player('cinemajs', {
    events: {
      'onStateChange': cinemaJs
    }
  });
};

cinemaJs = function(event) {
  if (event.data === '1') {
    $('#cinema-overlay').fadeIn('fast');
  } else if (event.data === '2') {
    $('#cinema-overlay').fadeOut('fast');
  }
};

$(document).ready(function() {
  $('body').append('<div id="cinema-overlay"></div>');
  console.log($('#cinema-overlay'));
  $('#cinema-overlay').css({
    'display': 'none',
    'width': '100%',
    'height': '100%',
    'position': 'fixed',
    'z-index': '999',
    'top': '0',
    'left': '0',
    'background': 'rgba(0, 0, 0, 0.9)'
  });
  $('#culture').css({
    'position': 'relative',
    'z-index': 9999
  });
  $('#cinema-overlay').on('click', function() {
    $(this).fadeOut('fast');
    $("#culture").get(0).pause();
  });
  $("#culture").on('play', function() {
    return $('#cinema-overlay').fadeIn('fast');
  });
  return $("#culture").on('pause', function() {
    return $('#cinema-overlay').fadeOut('fast');
  });
});

player = void 0;
