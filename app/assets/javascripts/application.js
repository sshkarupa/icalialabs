jQuery(document).ready(function($) {
  var moveLeft, moveRight, slideCount, slideHeight, slideWidth, sliderUlWidth;
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
