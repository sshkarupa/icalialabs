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

$(".hide").click(function(){
	$('.members-fullpage').fadeOut();
	$('.members-grid').fadeIn();
});

$('.close-mobile').click(function() {
	$('.members-fullpage').fadeOut();
	$('.members-grid').fadeIn();
});

$('.members-grid .col-2').click(function() {
	var member = $(this).attr('data-name');
	$('.active').removeClass('active');
	$('a[data-name="'+ member +'"]').addClass('active');
	$('.members-fullpage').fadeIn();
	$('.members-grid').fadeOut();
	$('.member').hide();
	$('.member[data-name="'+ member +'"]').show();
	$('body').scrollTop($(".team-section").offset().top);
});