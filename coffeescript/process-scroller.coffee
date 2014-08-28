###*
cbpFixedScrollLayout.js v1.0.0
http://www.codrops.com

Licensed under the MIT license.
http://www.opensource.org/licenses/mit-license.php

Copyright 2013, Codrops
http://www.codrops.com
###
cbpFixedScrollLayout = (->
  # cache and initialize some values
  # the cbp-fbscroller´s sections
  # the navigation links
  # index of current link / section
  # the body element
  # the body animation speed
  # the body animation easing (jquery easing)
  init = ->
    config.$container.css('height', '100%')
    # click on a navigation link: the body is scrolled to the position of the respective section
    config.$navlinks.on "click", ->
      scrollAnim config.$sections.eq($(this).index()).offset().top
      false

    
    # 2 waypoints defined:
    # First one when we scroll down: the current navigation link gets updated. 
    # A `new section´ is reached when it occupies more than 70% of the viewport
    # Second one when we scroll up: the current navigation link gets updated. 
    # A `new section´ is reached when it occupies more than 70% of the viewport
    config.$sections.waypoint((direction) ->
      changeNav $(this)  if direction is "down"
      return
    ,
      offset: "30%"
    ).waypoint ((direction) ->
      changeNav $(this)  if direction is "up"
      return
    ),
      offset: "-30%"

    
    # on window resize: the body is scrolled to the position of the current section
    $(window).on "debouncedresize", ->
      scrollAnim config.$sections.eq(config.currentLink).offset().top
      return

    return
  
  # update the current navigation link
  changeNav = ($section) ->
    config.$navlinks.eq(config.currentLink).removeClass "scroller-current"
    config.currentLink = $section.index("#process-scroller > section")
    config.$navlinks.eq(config.currentLink).addClass "scroller-current"
    return
  
  # function to scroll / animate the body
  scrollAnim = (top) ->
    config.$body.stop().animate
      scrollTop: top
    , config.animspeed, config.animeasing
    return
  config =
    $container: $('body.process').parents('html')
    $sections: $("#process-scroller > section")
    $navlinks: $("#process-scroller > nav > a")
    currentLink: 0
    $body: $(".process, html")
    animspeed: 650
    animeasing: "easeInOutExpo"

  init: init
)()
