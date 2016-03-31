var idx, idxs, ignore, rule, scrollToTop, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;

$(document).on("mobileinit", function() {
  $.mobile.hidePageLoadingMsg();
  $.mobile.ajaxEnabled = false;
  return $.mobile.loadingMessage = false;
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
    $('.menu-content').toggleClass('show-menu');
    $('.logo').toggleClass('active');
    setTimeout(function(){
      $('.menu-content a').toggleClass('show-link');
      $('.menu-content .list-menu').toggleClass('show-list-menu');
    }, 200);
    $('.main-menu').toggleClass('active');
    $('.burger').toggleClass('active');
    $('.burger > .one').toggleClass('active');
    $('.burger > .two').toggleClass('active');
    $('.burger > .burger-label').toggleClass('active');
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

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

$(window).scroll(function(){
  if ($('.clients-logos_item').visible( true )) {
    $('.clients-logos_item').show().addClass('fadeInUp');
  }
 
  var cutoff = $(window).scrollTop();
  var sectionNumber = 01;
  
  $('[data-section').each(function(){
      if($(this).offset().top + $(this).height() > cutoff){
          $('[data-section]').removeClass('current');
          var sectionName = $(this).attr('data-section');
          var sectionNumber = $('section').index(this);
          $('.indicator_title').text(sectionName);
          $('.indicator_number').text(sectionNumber);
          return false; 
      }
  }); 
});

var statItemsW =  $('.stat-item').outerWidth();
var statItemsNumber = $('.stat-item').size();
var statWidth = (statItemsNumber * statItemsW) * 1.20; 
var statItemContainer = $('.stats-container');
var windowCenter = $(window).width() / 2;

statItemContainer.width(statWidth);

$('.stats-section').on( "mousemove", function(event){
  var x = event.pageX;
  y = x - (x * .20);
  b = x - (x * .60);

  if (x >= windowCenter) {
    $('.stat-item').css('left','-' + y +'px');
  }

  if (x <= windowCenter) {
    $('.stat-item').css('left','' + b +'px');
  }
});

$('.stat-item').hover(function(){
  $('.stat-item').removeClass('active');
  $(this).addClass('active');
})

$('.blob').hover(function(){
  $('.blob').toggleClass('center');
});