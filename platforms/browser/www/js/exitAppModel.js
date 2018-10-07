$('#exit_app').click(function(){
	navigator.app.exitApp();
});
$('#cancel_exit_app_model').click(function(){
	$('#backbutton').css('display', 'none');
	$('.complete').removeClass('myoverlay');
})

