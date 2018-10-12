    $('.searchbar').keydown(function (e) {
    if (e.keyCode == 13) {
	var searchValue = $('.searchbar').val();
	
	if(searchValue != '' && searchValue != null)
	{
	
$('.search_result_h3').html('<h4 style="text-align:center;">Search Result...</h4>');
$('#video_list').css('display','none');	
 $("#myModal").animate({width:'toggle'},100);
$('.my_lazy_loader').css('display','block');
$(".my_lazy_loader").delay(2000).hide(function()
{
	getyoutubeVideoBySearch(searchValue, 'video' , '5');

	$(this).fadeOut("slow");
	$(this).hide();
	$('.searchbar').val('');
	$('.search_result_h3').css('display','none');
});
}
else{
	$('.searchbar').focus();

}
}
});

    $('#search_btn').click(function(){
    	var searchValue = $('.searchbar').val();
	
	if(searchValue != '' && searchValue != null)
	{
		var y = localStorage.getItem("counterAds");
		var x  = 1;
//sum += countAds;
var sum = (x*100 + y*100) / 100;
localStorage.setItem("counterAds",sum);
initApp();	
$('.search_result_h3').html('<h4 style="text-align:center;">Search Result...</h4>');
$('#video_list').css('display','none');	
 $("#myModal").animate({width:'toggle'},100);
$('.my_lazy_loader').css('display','block');
$(".my_lazy_loader").delay(2000).hide(function()
{
	getyoutubeVideoBySearch(searchValue, 'video' , '5');

	$(this).fadeOut("slow");
	$(this).hide();
	$('.searchbar').val('');
	$('.search_result_h3').css('display','none');
});
}
else{
	$('.searchbar').focus();
}
});


$(function() {
	
	$('.js-wrapper').mouseenter(function() {
//alert("System running.");
$('.logo_div').hide();
$(this).animate({
	width: '+=75%',
}, 'fast');
$('#search_btn').hide();
$('#backSearhBar').removeClass('hide');
$(this).css('border-bottom' , '1px solid rgb(255, 255, 255) ');

});
	$('.js-wrapper').mouseleave(function() {
		$(this).animate({
			width: '-=75%',
		}, 'fast');
		$('#search_btn').css('display', 'block');
		$('#backSearhBar').addClass('hide');
		$(this).css('border-bottom' , 'none');
		$('.glass-body').toggleClass('black-col');
		$('.glass-handle').toggleClass('black-col');
		$('.logo_div').show('slow');
		$('.searchbar').val('');
		$('.search_result_h3').html(' ');
	});
});


$('#backSearhBar').click(function(){
$(this).animate({
			width: '-=75%',
		}, 'fast');
$('#search_btn').css('display', 'block');
		$(this).css('border-bottom' , 'none');
		$('.glass-body').toggleClass('black-col');
		$('.glass-handle').toggleClass('black-col');
		$('.logo_div').show('slow');
		$('.searchbar').val('');
		$('.search_result_h3').html(' ');
});