jQuery(document).ready ($) ->
  #Intro animation
  $('.intro').addClass 'animated bounceInUp'
  
  #Class toggle for burger items
  $('.burger').on 'click', (e) ->
    $('.menu-overlay').toggleClass 'show-menu'
    $('.menu-content').toggleClass 'show-menu animated bounceInDown'
    $('.burger').toggleClass 'active'
    $('.burger > .one').toggleClass 'one-active'
    $('.burger > .two').toggleClass 'hide-two'
    $('.burger > .three').toggleClass 'three-active'
    e.preventDefault()

    # Toggle class for skills section
  $('.mask').on 'click', (e) ->
    $(@).toggleClass 'expand-content'
    #$(@).siblings('.mask').css "width", 0
    $(@).siblings('.mask').toggleClass('hide')
    $(@).siblings('.mask').children('.skill').toggleClass('hide-all')
    $(@).children('.skill').children('.col-2').children('.more').toggleClass('push-front')
    if $(@).children('.technology').length > 0
      $(@).siblings('.fusion.circle').toggleClass('move-left')
    else
      $(@).siblings('.fusion.circle').toggleClass('move-right')

    if $(@).siblings('.fusion.circle').hasClass('move-left') || $(@).siblings('.fusion.circle').hasClass('move-right')
        $(@).siblings('.fusion.circle')[0].innerHTML = 'X'
    else
        $(@).siblings('.fusion.circle')[0].innerHTML = "<span>Perfect Fusion</span>"

  $('.move-left').on 'click', (e) ->
    $('.mask').removeClass('expand-content')

  #Slider functions
  moveTop = ->
    $("#slider ul.slides").animate
      top: +300
    , 200, ->
      $("#slider ul.slides li:last-child").prependTo "#slider ul.slides"
      $("#slider ul.slides").css "top", ""
      return
    return

  moveBottom = ->
    $("#slider ul.slides").animate
      top: -300
    , 2000, ->
      $("#slider ul.slides li:first-child").appendTo "#slider ul.slides"
      $("#slider ul.slides").css "top", ""
      return

    return

  getActive = ->
    if slideCounter >= slideCount
      slideCounter = 1
    else
      slideCounter += 1

    $('#slider ul.slides li')[slideCount].addClass('active')

  slideCount = $("#slider ul.slides li").length
  slideWidth = $("#slider ul.slides li").width()
  slideHeight = $("#slider ul.slides li").height()
  slideCounter = 0
  sliderUlWidth = slideCount * slideWidth
  $("#slider").css
    width: slideWidth
    height: slideHeight

  $("#slider ul.slides").css
    width: sliderUlWidth
    marginTop: -300

  $("#slider ul li:last-child").prependTo "#slider ul"
  $("a.control_prev").on 'click', (e) ->
    moveTop()
    e.preventDefault()
    return

  $("a.control_next").on 'click', (e) ->
    moveBottom()
    getActive()
    e.preventDefault()
    return

  return

