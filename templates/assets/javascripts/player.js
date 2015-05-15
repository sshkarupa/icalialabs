var cinemaJs, onYouTubePlayerAPIReady, player;

onYouTubePlayerAPIReady = function() {
  var player;
  player = new YT.Player('cinemajs', {
    events: {
      'onStateChange': cinemaJs
    }
  });
};

cinemaJs = function(event) {
  if (event.data === '1') {
    $('#cinema-overlay').fadeIn('fast');
  } else if (event.data === '2') {
    $('#cinema-overlay').fadeOut('fast');
  }
};

$(document).ready(function() {
  $('body').append('<div id="cinema-overlay"></div>');
  $('#cinema-overlay').css({
    'display': 'none',
    'width': '100%',
    'height': '100%',
    'position': 'fixed',
    'z-index': '999',
    'top': '0',
    'left': '0',
    'background': 'rgba(0, 0, 0, 0.9)'
  });
  $('#culture').css({
    'position': 'relative',
    'z-index': 9999
  });
  $('#cinema-overlay').on('click', function() {
    $(this).fadeOut('fast');
    $("#culture").get(0).pause();
  });
  $("#culture").on('play', function() {
    return $('#cinema-overlay').fadeIn('fast');
  });
  return $("#culture").on('pause', function() {
    return $('#cinema-overlay').fadeOut('fast');
  });
});

player = void 0;
