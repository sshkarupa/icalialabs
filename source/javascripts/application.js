var idx, idxs, ignore, rule, scrollToTop, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref, _ref1;
var isOpen = false;

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
 
  var cutoff = $(window).scrollTop();
  var sectionNumber = 01;
  
  $('[data-section]').each(function(){
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
};



$('.burger').on('click', function(e) {
  if (isOpen === false){
    openMenu();
    isOpen = true;
  } else {
    closeMenu();
    isOpen = false;
  }
  return e.preventDefault();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {  
    closeMenu();
    isOpen = false;    
  }   // esc
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
});


$('body.projects').attr('data-400','background-color:rgb(255,255,255);');
$('body.projects').attr('data-700','background-color:rgb(234,62,106);');
$('body.projects').attr('data-1700','background-color:rgb(67,197,213);');
$('body.projects').attr('data-2300','background-color:rgb(113,57,158);');
$('body.projects').attr('data-3000','background-color:rgb(52,99,169);');


$('body.process').attr('data-400','background-color:rgb(255,255,255);');
$('body.process').attr('data-500','background-color:rgb(255, 52, 52);');