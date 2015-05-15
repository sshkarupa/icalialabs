$(document).on "mobileinit", ->
  $.mobile.hidePageLoadingMsg()
  $.mobile.ajaxEnabled = false
  $.mobile.loadingMessage = false

scrollToTop = ->
  verticalOffset = (if typeof (verticalOffset) isnt "undefined" then verticalOffset else 0)
  element = $("body")
  offset = element.offset()
  offsetTop = offset.top
  $("html, body").animate
    scrollTop: offsetTop
  , 500, "linear"
  return

jQuery(document).ready ->

  $(document).on "scroll", ->
    if $(window).scrollTop() > 100
      $(".to-top").addClass "show"
      $('.engage').addClass('animated bounceInUp')
      $('.experience').addClass('animated bounceInUp')
      $('.knowledge').addClass('animated bounceInUp')
    else
      $(".to-top").removeClass "show"
      $('.engage').removeClass('animated bounceInUp')
      $('.experience').removeClass('animated bounceInUp')
      $('.knowledge').removeClass('animated bounceInUp')

    return

  $(".to-top").on "click", scrollToTop

  $(".animsition").animsition
    inClass: "zoom-in"
    outClass: "zoom-out"
    inDuration: 1500
    outDuration: 800
    linkElement: ".animsition-link"
    
    # e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    touchSupport: true
    loading: true
    loadingParentElement: "body" #animsition wrapper element
    loadingClass: "animsition-loading"
    unSupportCss: [
      "animation-duration"
      "-webkit-animation-duration"
      "-o-animation-duration"
    ]

  setTimeout (->
    $(".load-mask").fadeOut "slow"
    ), 900

  isMobile =
    Android: ->
      navigator.userAgent.match /Android/i

    BlackBerry: ->
      navigator.userAgent.match /BlackBerry/i

    iOS: ->
      navigator.userAgent.match /iPhone|iPad|iPod/i

    Opera: ->
      navigator.userAgent.match /Opera Mini/i

    Windows: ->
      navigator.userAgent.match /IEMobile/i

    any: ->
      isMobile.Android() or isMobile.BlackBerry() or isMobile.iOS() or isMobile.Opera() or isMobile.Windows()

  if isMobile.any() != null
    $('html').addClass 'no-hover'

  #Class toggle for burger items
  $('.burger').on 'click', (e) ->
    $('.menu-overlay').toggleClass 'show-menu'
    $('.menu-content').toggleClass 'show-menu animated bounceInDown'
    $('.main-menu').toggleClass 'active'
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

  $('.testimonials .picture .testimonial-photo').on 'click', (e) ->
    $('.testimonials .picture .testimonial-photo').removeClass 'active'
    $(@).addClass 'active'
    $('.quote-container').removeClass 'active'
    $('.quote-container.'+$(@)[0].id).toggleClass 'active'

if $('body').hasClass 'no-hover'
  ignore = /:hover\b/
  try
    for stylesheet in document.styleSheets
      console.log document.styleSheets
      idxs = []
      # detect hover rules
      for rule, idx in stylesheet.cssRules
        if rule.type is CSSRule.STYLE_RULE and ignore.test(rule.selectorText)
          idxs.unshift idx

      # delete hover rules
      stylesheet.deleteRule idx for idx in idxs
