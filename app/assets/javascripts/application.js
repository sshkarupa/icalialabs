jQuery(document).ready(function($) {
  var slideCount, slideCounter, updateNext, updatePrevious;
  $('.intro').addClass('animated bounceInUp');
  $('.burger').on('click', function(e) {
    $('.menu-overlay').toggleClass('show-menu');
    $('.menu-content').toggleClass('show-menu animated bounceInDown');
    $('.burger').toggleClass('active');
    $('.burger > .one').toggleClass('one-active');
    $('.burger > .two').toggleClass('hide-two');
    $('.burger > .three').toggleClass('three-active');
    return e.preventDefault();
  });
  $('.mask').on('click', function(e) {
    $(this).toggleClass('expand-content');
    $(this).siblings('.mask').toggleClass('hide');
    $(this).siblings('.mask').children('.skill').toggleClass('hide-all');
    $(this).children('.skill').children('.col-2').children('.more').toggleClass('push-front');
    if ($(this).children('.technology').length > 0) {
      $(this).siblings('.fusion.circle').toggleClass('move-left');
    } else {
      $(this).siblings('.fusion.circle').toggleClass('move-right');
    }
    if ($(this).siblings('.fusion.circle').hasClass('move-left') || $(this).siblings('.fusion.circle').hasClass('move-right')) {
      return $(this).siblings('.fusion.circle')[0].innerHTML = 'X';
    } else {
      return $(this).siblings('.fusion.circle')[0].innerHTML = "<span>Perfect Fusion</span>";
    }
  });
  $('.move-left').on('click', function(e) {
    return $('.mask').removeClass('expand-content');
  });
  slideCounter = 1;
  updateNext = function() {
    console.log(slideCounter >= slideCount);
    if (slideCounter >= slideCount) {
      slideCounter = 0;
    }
    $($('.work-slider > .item-slide').removeClass('active'));
    $($('.work-slider > .item-slide')[slideCounter]).addClass('active');
    $($('.work-slider > .item-slide')).fadeOut();
    $('.work-slider > .item-slide.active').fadeIn();
    slideCounter++;
  };
  updatePrevious = function() {
    if (slideCounter >= slideCount) {
      slideCounter = 0;
    } else {
      slideCounter -= 1;
    }
    $($('.work-slider > .item-slide').removeClass('active'));
    $($('.work-slider > .item-slide')[slideCounter]).addClass('active');
    console.log(slideCount);
  };
  slideCount = $(".work-slider > .item-slide").length;
  $("a.control_prev").on('click', function(e) {
    updatePrevious();
    e.preventDefault();
  });
  $("a.control_next").on('click', function(e) {
    updateNext();
    e.preventDefault();
  });
});

$('.work-slider > .item-slide.active').fadeIn();
