jQuery(document).ready(function($) {
  var moveLeft, moveRight, slideCount, slideHeight, slideWidth, sliderUlWidth;
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
  moveLeft = function() {
    $("#slider ul.slides").animate({
      left: +slideWidth
    }, 200, function() {
      $("#slider ul.slides li:last-child").prependTo("#slider ul.slides");
      $("#slider ul.slides").css("left", "");
    });
  };
  moveRight = function() {
    $("#slider ul.slides").animate({
      left: -slideWidth
    }, 2000, function() {
      $("#slider ul.slides li:first-child").appendTo("#slider ul.slides");
      $("#slider ul.slides").css("left", "");
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
    marginLeft: -slideWidth
  });
  $("#slider ul li:last-child").prependTo("#slider ul");
  $("a.control_prev").on('click', function(e) {
    moveLeft();
    e.preventDefault();
  });
  $("a.control_next").on('click', function(e) {
    moveRight();
    e.preventDefault();
  });
});
