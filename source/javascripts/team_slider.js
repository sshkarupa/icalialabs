$('.members-nav a').click(function(){
  var member = $(this).attr('data-name');
  $('.member').hide();
  $('.member[data-name="'+ member +'"]').show();
});

$(".members-nav a:first").addClass('active');

$(".members-nav a").click(function(){
	$('.active').removeClass('active');
  $(this).addClass('active');
});