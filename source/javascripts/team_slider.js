$('.members-nav a').click(function(){
  var member = $(this).attr('data-name');
  $('.member').hide();
  $('.member[data-name="'+ member +'"]').show();
});