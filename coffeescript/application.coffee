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
  $('.mask, span.circle').on 'click', (e) ->
    if $(@).hasClass('mask')
      mask = $(@)
    else
      mask = $(@).siblings('.expand-content')
    mask.toggleClass 'expand-content'
    #$(@).siblings('.mask').css "width", 0
    mask.siblings('.mask').toggleClass('hide')
    mask.siblings('.mask').children('.skill').toggleClass('hide-all')
    mask.children('.skill').children('.col-2').children('.more').toggleClass('push-front')
    if mask.children('.technology').length > 0
      mask.siblings('.fusion.circle').toggleClass('move-left')
    else
      mask.siblings('.fusion.circle').toggleClass('move-right')

    if mask.siblings('.fusion.circle').hasClass('move-left') || $(@).siblings('.fusion.circle').hasClass('move-right')
        mask.siblings('.fusion.circle')[0].innerHTML = 'X'
    else
        mask.siblings('.fusion.circle')[0].innerHTML = "<span>Perfect Fusion</span>"

  #Slider functions
  slideCounter = 1

  updateNext = ->
    console.log(slideCounter >= slideCount)
    if slideCounter >= slideCount
      slideCounter = 0

    $($('.work-slider .item-slide').removeClass('active'))
    $($('.work-slider .item-slide')[slideCounter]).addClass('active')
    $($('.work-slider .item-slide')).fadeOut()

    $('.work-slider .item-slide.active').fadeIn()
    slideCounter++
    return

  updatePrevious = ->
    if slideCounter >= slideCount
      slideCounter = 0
    else
      slideCounter -= 1

    $($('.work-slider .item-slide').removeClass('active'))
    $($('.work-slider .item-slide')[slideCounter]).addClass('active')
    console.log(slideCount)
    return

  slideCount = $(".work-slider .item-slide").length

  $("a.control_prev").on 'click', (e) ->
    updatePrevious()
    e.preventDefault()
    return

  $("a.control_next").on 'click', (e) ->
    updateNext()
    e.preventDefault()
    return

  return
$('.work-slider .item-slide.active').fadeIn()
