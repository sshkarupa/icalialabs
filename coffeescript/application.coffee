$(document).bind "mobileinit", ->
  $.mobile.hidePageLoadingMsg()
  $.mobile.ajaxEnabled = false
  $.mobile.loadingMessage = false
  return




$(".icon").hover(function() {
  $(this).addClass('animated bounce');
});

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
    else
      $(".to-top").removeClass "show"
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

  if isMobile.any() == null
    $(".team-section").kinetic()
  else
    $('html').addClass 'no-hover'


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
