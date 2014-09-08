jQuery(document).ready ->
  
  setTimeout (->
    $(".load-mask").fadeOut "slow"
    ), 900


  $(".team-section").kinetic()

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



