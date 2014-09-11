var idx, idxs, ignore, rule, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;

$(document).bind("mobileinit", function() {
  $.mobile.hidePageLoadingMsg();
  $.mobile.ajaxEnabled = false;
  $.mobile.loadingMessage = false;
});

jQuery(document).ready(function() {
  var isMobile;
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
  if (isMobile.any() === null) {
    $(".team-section").kinetic();
  } else {
    $('html').addClass('no-hover');
  }
  $('.burger').on('click', function(e) {
    $('.menu-overlay').toggleClass('show-menu');
    $('.menu-content').toggleClass('show-menu animated bounceInDown');
    $('.burger').toggleClass('active');
    $('.burger > .one').toggleClass('one-active');
    $('.burger > .two').toggleClass('hide-two');
    $('.burger > .three').toggleClass('three-active');
    return e.preventDefault();
  });
  return $('.mask, span.circle').on('click', function(e) {
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
