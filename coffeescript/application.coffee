jQuery(document).ready ($) ->

  $('.burger').on 'click', (e) ->
    $('.burger').toggleClass 'active'
    $('.burger > .one').toggleClass 'one-active'
    $('.burger > .two').toggleClass 'hide-two'
    $('.burger > .three').toggleClass 'three-active'
    e.preventDefault()

  $('.mask').on 'click', (e) ->
    $(@).parents('.skill').toggleClass 'expand-content'
    $(@).children('.more').toggleClass 'more-content'
    if $(@).parents('.technology').length > 0
      $(@).parents('.skill').siblings('.fusion.circle').toggleClass('move-left')
    else
      $(@).parents('.skill').siblings('.fusion.circle').toggleClass('move-right')

    if $(@).parents('.skill').siblings('.fusion.circle').hasClass('move-left') || $(@).parents('.skill').siblings('.fusion.circle').hasClass('move-right')
        $(@).parents('.skill').siblings('.fusion.circle')[0].innerHTML = 'X'
    else
        $(@).parents('.skill').siblings('.fusion.circle')[0].innerHTML = "Perfect<br/>Fusion"



  $('.fusion.circle').on 'click', (e) ->

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

