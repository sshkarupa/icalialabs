jQuery(document).ready ($) ->
  $('.intro').addClass 'animated bounceInUp'
  
  $('.burger').on 'click', (e) ->
    $('.menu-overlay').toggleClass 'show-menu'
    $('.menu-content').toggleClass 'show-menu animated bounceInDown'
    $('.burger').toggleClass 'active'
    $('.burger > .one').toggleClass 'one-active'
    $('.burger > .two').toggleClass 'hide-two'
    $('.burger > .three').toggleClass 'three-active'
    e.preventDefault()

  moveLeft = ->
    $("#slider ul.slides").animate
      left: +slideWidth
    , 200, ->
      $("#slider ul.slides li:last-child").prependTo "#slider ul.slides"
      $("#slider ul.slides").css "left", ""
      return
    return

  moveRight = ->
    $("#slider ul.slides").animate
      left: -slideWidth
    , 2000, ->
      $("#slider ul.slides li:first-child").appendTo "#slider ul.slides"
      $("#slider ul.slides").css "left", ""
      return

    return

  slideCount = $("#slider ul.slides li").length
  slideWidth = $("#slider ul.slides li").width()
  slideHeight = $("#slider ul.slides li").height()
  sliderUlWidth = slideCount * slideWidth
  $("#slider").css
    width: slideWidth
    height: slideHeight

  $("#slider ul.slides").css
    width: sliderUlWidth
    marginLeft: -slideWidth

  $("#slider ul li:last-child").prependTo "#slider ul"
  $("a.control_prev").on 'click', (e) ->
    moveLeft()
    e.preventDefault()
    return

  $("a.control_next").on 'click', (e) ->
    moveRight()
    e.preventDefault()
    return

  return

