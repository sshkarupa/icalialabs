jQuery(document).ready(function($) {

  setTimeout(function() {
    $('.load-mask').fadeOut('slow');
  }, 900);

//********** Horizontal scroll on team page *********************//
  $('.team').kinetic();

//********** Animation for burger *********************//
  var slideCount, slideCounter, updateNext, updatePrevious;
  setTimeout(function() {
    $('.main-menu').addClass('animated bounceInDown');
  }, 900);
  $('.burger').on('click', function(e) {
    $('.menu-overlay').toggleClass('show-menu');
    $('.menu-content').toggleClass('show-menu animated bounceInDown');
    $('.burger').toggleClass('active');
    $('.burger > .one').toggleClass('one-active');
    $('.burger > .two').toggleClass('hide-two');
    $('.burger > .three').toggleClass('three-active');
    return e.preventDefault();
  });
//********** Animation skills on home page *********************//
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
  slideCounter = 1;
  updateNext = function() {
    console.log(slideCounter >= slideCount);
    if (slideCounter >= slideCount) {
      slideCounter = 0;
    }
    $($('.work-slider .item-slide').removeClass('active'));
    $($('.work-slider .item-slide')[slideCounter]).addClass('active');
    $($('.work-slider .item-slide')).fadeOut();
    $('.work-slider .item-slide.active').fadeIn();
    slideCounter++;
  };
  updatePrevious = function() {
    if (slideCounter >= slideCount) {
      slideCounter = 0;
    } else {
      slideCounter -= 1;
    }
    $($('.work-slider .item-slide').removeClass('active'));
    $($('.work-slider .item-slide')[slideCounter]).addClass('active');
    console.log(slideCount);
  };
  slideCount = $(".work-slider .item-slide").length;
  $("a.control_prev").on('click', function(e) {
    updatePrevious();
    e.preventDefault();
  });
  $("a.control_next").on('click', function(e) {
    updateNext();
    e.preventDefault();
  });
});

$('.work-slider .item-slide.active').fadeIn();

