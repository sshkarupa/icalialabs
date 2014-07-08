jQuery(document).ready(function($) {
  var moveBottom, moveTop, slideCount, slideHeight, slideWidth, sliderUlWidth;
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
    if ($(this).siblings('.technology').length > 0) {
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
  moveTop = function() {
    $("#slider ul.slides").animate({
      top: +300
    }, 200, function() {
      $("#slider ul.slides li:last-child").prependTo("#slider ul.slides");
      $("#slider ul.slides").css("top", "");
    });
  };
  moveBottom = function() {
    $("#slider ul.slides").animate({
      top: -300
    }, 2000, function() {
      $("#slider ul.slides li:first-child").appendTo("#slider ul.slides");
      $("#slider ul.slides").css("top", "");
    });
  };
  slideCount = $("#slider ul.slides li").length;
  slideWidth = $("#slider ul.slides li").width();
  slideHeight = $("#slider ul.slides li").height();
  sliderUlWidth = slideCount * slideWidth;
  $("#slider").css({
    width: slideWidth,
    height: slideHeight
  });
  $("#slider ul.slides").css({
    width: sliderUlWidth,
    marginTop: -300
  });
  $("#slider ul li:last-child").prependTo("#slider ul");
  $("a.control_prev").on('click', function(e) {
    moveTop();
    e.preventDefault();
  });
  $("a.control_next").on('click', function(e) {
    moveBottom();
    e.preventDefault();
  });
});
