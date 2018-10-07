function showVideoPost(postSize , pakgeName) {
			var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/v1/GetVideo/getAllPost?pakgeName="+pakgeName,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "ba9c2174-fa8f-49e1-8397-93caabfbefe4"
  }
}
var html = '';
var base_url = "http://appqubz-001-site1.etempurl.com";
$.ajax(settings).done(function (response) {
$.each( response, function( key, myresponse ) {

if (myresponse.Active== true) {
  	var image_url = myresponse.Url.split('~');
  	var image = base_url+image_url[1];
  	var response = JSON.parse(localStorage.getItem("item"));
  	var checkTitle = response[5];
  	var title = myresponse.Title;
  	html += '<a class="single_post_view" data-toggle="modal" id="'+myresponse.Id+'" onclick="openModel(this)" >';
					html += '<div  style="margin-bottom:5px;" class="col eachsize '+postSize+'" >';
						html +=	'<div class="entry ">';
							html +=	'<img src="'+image+'" alt="" >';
							
							if(title === undefined || title === null)
							{
								html += '';
							}
							else
							{	
							html += '<div class="desc">';
								html +=	'<p style="text-align:center;">'+myresponse.Title+'</p>';								
							html += '</div>';
							}
						html += '</div>';
					html += '</div>';
				html += '</a>';


}
			});
			$('#main_content').html(html);
});  
}
function openVideoModel(object)
{
var y = localStorage.getItem("counterAds");
var x  = 1;
//sum += countAds;
var sum = (x*100 + y*100) / 100;
 localStorage.setItem("counterAds",sum);
 var response = JSON.parse((localStorage.getItem("item")));
 var admobCheck = response[7];
 var admobLimit = response[2];
 console.log('admobLimit'+admobLimit);
 if(admobCheck == 'admobRunning' &&  admobLimit > 0 )
  {
  var counter = 0;
  var response = JSON.parse((localStorage.getItem("item")));
  var counterAds = localStorage.getItem("counterAds");
  admobLimit = response[2];
  if(counterAds == admobLimit)
  {
  	showIndustrialAd();
  	var id = $(object).attr('id');
  	localStorage.setItem("openVideoModelId",id);
  	prepareInterstitialAd();
  	localStorage.setItem("counterAds",'0');
  }
 else
{

prepareInterstitialAd();  
$('#img_link').css('display','none');
$('#video_list').css('display', 'none');
$('.my_lazy_loader').removeClass( "hide" );
$('.my_lazy_loader').show();
var id = $(object).attr('id');
  openModel(id);
}


}
else
{
prepareInterstitialAd();  
$('#img_link').css('display','none');
$('#video_list').css('display', 'none');
$('.my_lazy_loader').removeClass( "hide" );
$('.my_lazy_loader').show();
var id = $(object).attr('id');
  openModel(id);

}

	

}
function openModel(id) {

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/v1/GetPostDiscraption/postId?postId="+id,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "9300a46c-448f-49be-b9d8-c86ef37645f5"
  }
}
$("#myModal").animate({width:'toggle'},100);
$.ajax(settings).done(function (response) {
if(response.Keyword != null && response.RedirectLink == false)
	{


 $('#myModal .modal-content').css('background-color' , '#fff');
 $('.post_title').html(response.Title);
//youtube
var stringKeyword = response.Keyword;
var keyword = stringKeyword.split(' ').join('+');
var type = 'video';
if(response.Limit == 0 || response.Limit == null)
{
	var limit = 5;
}
else
{
	var limit = response.Limit;
}

if(response.IsYoutube == false){
getDailymotionBySearch(keyword , limit);
}
else
getyoutubeVideoBySearch(keyword, type , limit);
}		
	
else if(response.Keyword == null && response.RedirectApp == '') 
	{

	}
 $('.my_lazy_loader').hide();
});
}
