var idx, idxs, ignore, rule, scrollToTop, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
var isOpen = false;

// $(document).ready(function() {
//   var quotientTest = readCookie("quotient-test");
//   if (!quotientTest) {
//     var samples = ["a", "b"];
//     var sample = samples[Math.floor(Math.random()*samples.length)];
//     createCookie("quotient-test", sample, 45)
//   }
// })

// $("a[data-label^='quote']:not([data-label$='es'])").on('click', function() {
//   var quotientTest = readCookie("quotient-test");
//   if (quotientTest == "b") {
//     var win = window.open("http://quotient.icalialabs.com", '_blank');
//     win.focus();
//     return false
//   }
// });

$(document).on("mobileinit", function() {
  $.mobile.hidePageLoadingMsg();
  $.mobile.ajaxEnabled = false;
  return $.mobile.loadingMessage = false;
});

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

$(window).scroll(function(){
  if ($('.clients-logos_item').visible( true )) {
    $('.clients-logos_item').show().addClass('fadeInUp');
  }
});

function openMenu() {
  $('.menu-overlay').addClass('show-menu');
  $('.menu-content').addClass('show-menu');
  $('.logo').addClass('active');
  setTimeout(function(){
  $('.menu-content a').addClass('show-link');
  $('.menu-content .list-menu').addClass('show-list-menu');
  }, 200);
  $('.main-menu').addClass('active');
  $('.burger').addClass('active');
  $('.burger > .one').addClass('active');
  $('.burger > .two').addClass('active');
  $('.burger > .burger-label').addClass('active');
  isOpen = true;
};

function closeMenu() {
  $('.menu-overlay').removeClass('show-menu');
  $('.menu-content').removeClass('show-menu');
  $('.logo').removeClass('active');
  setTimeout(function(){
  $('.menu-content a').removeClass('show-link');
  $('.menu-content .list-menu').removeClass('show-list-menu');
  }, 200);
  $('.main-menu').removeClass('active');
  $('.burger').removeClass('active');
  $('.burger > .one').removeClass('active');
  $('.burger > .two').removeClass('active');
  $('.burger > .burger-label').removeClass('active');
  isOpen = false;
};



$('.burger').on('click', function(e) {
  if (isOpen){
    closeMenu();
  } else {
    openMenu();
  }
  return e.preventDefault();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeMenu();
  }   // esc
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('.main-menu').addClass('is-active');
  } else {
    $('.main-menu').removeClass('is-active');
  }
});

$("a[data-label]").on("click", function(){
  // var quotientTest = readCookie("quotient-test");
  ga("send", "event", "clicks", $(this).data('label'));
  if ($(this).data('label').indexOf("quote") !== -1) {
  	goog_report_conversion();
    // if (quotientTest == "b") {
    //   ga("send", "event", "A/B Test", "Sent to Quotient");
    // } else {
      ga("send", "event", "A/B Test", "Sent to Typeform");
    // }
  }
})

$(".es-btn").on('click', function() {
	if (window.location.pathname.split("/")[1]==="es") {
		window.location.pathname = window.location.pathname;
	} else {
		window.location.pathname = "/es"+window.location.pathname
	}
});

$(".en-btn").on('click', function() {
	if (window.location.pathname.split("/")[1]==="es") {
		window.location.pathname = window.location.pathname.split("/")[2];
	} else {
		window.location.pathname = window.location.pathname;
	}
});
