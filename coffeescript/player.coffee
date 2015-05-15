onYouTubePlayerAPIReady = ->
  player = new (YT.Player)('cinemajs', events: 'onStateChange': cinemaJs)
  return

# Si está en estado (play = 1) -> show overlay
# else if (pause = 2) -> hide overlay

cinemaJs = (event) ->
  if event.data == '1'
    $('#cinema-overlay').fadeIn 'fast'
  else if event.data == '2'
    $('#cinema-overlay').fadeOut 'fast'
  return

$(document).ready ->
  # Crea overlay
  $('body').append '<div id="cinema-overlay"></div>'
  $('#cinema-overlay').css
    'display': 'none'
    'width': '100%'
    'height': '100%'
    'position': 'fixed'
    'z-index': '999'
    'top': '0'
    'left': '0'
    'background': 'rgba(0, 0, 0, 0.9)'
  # Estilos iframe
  $('#culture').css
    'position': 'relative'
    'z-index': 9999
  # Overlay click function
  $('#cinema-overlay').on 'click', ->
    $(this).fadeOut 'fast'
    $("#culture").get(0).pause()
    return
  $("#culture").on 'play', ->
    $('#cinema-overlay').fadeIn 'fast'

  $("#culture").on 'pause', ->
    $('#cinema-overlay').fadeOut 'fast'

# Cargamos api y apuntamos a función onStateChange -> cinemaJs
player = undefined
