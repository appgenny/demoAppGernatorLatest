$(document).ready(function(){
//cordova.getAppVersion.getPackageName(function(pkgname){
GallerySLider('com.oneapp.quransharif'); 
});
//});
/*
setInterval(function(){ 
   $("#right_gallery_image_slider").click();

},10000); */

$('#media').on('swipeleft', function(e) {
     $("#right_gallery_image_slider").click();
 
  //slides.eq(i + 1).addClass('active');
})
  $('#media').on('swiperight', function(e) {
   $("#left_gallery_image_slider").click();
 
});


function GallerySLider(packegeName) {
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/v1/GetVideo/getAllPost?pakgeName="+packegeName,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "7e06f881-5916-48c3-afd5-579215d9afd5"
  }
}
var base_url = "http://appqubz-001-site1.etempurl.com";
$.ajax(settings).done(function (response) {
 // var $slidergalleryHtml = '';
 var activeClass = '';
 var new_html = '';
 var counter = 0;
 new_html += '<div class="item active">\
            <div class="row">';

  $.each(response, function( key, myresponse ) {
    var image_url = myresponse.Url.split('~');
    var image = base_url+image_url[1];
    var subcategoryId = myresponse.SubcategoryId;
    var title = myresponse.Title;
    if(counter == 0){
      activeClass = 'active';
    }else{
      activeClass = '';
    }
    if (myresponse.Active== true && myresponse.Type != 'Slider') {
  if(counter % 3 == 0 && counter != 0 ){
             //console.log(key);
             
      new_html += '</div></div>\
            <div class="item '+activeClass+'">\
                  <div class="row">';
    }
    else
    {

if(myresponse.Type == 'Video')
{
 new_html += '<div class=" col-xs-4">\
                    <a class="thumbnail" data-toggle="modal" id="'+myresponse.Id+'" onclick="openModel(this)"><img alt="" src="'+image+'"></a>\
                  </div>';
  }
    if(myresponse.Type == 'Wallpaper')
{
new_html+= '<div class=" col-xs-4">\
                    <a class="thumbnail" data-toggle="modal" category_id ="'+subcategoryId+'" onclick="openModelWallpaper(this)"><img alt="" src="'+image+'"></a>\
                  </div>';
}
if (myresponse.Type == 'WebUrl') {
  if (myresponse.WebUrl != '') {

 new_html += '<div class=" col-xs-4">\
                    <a class="thumbnail" href="'+myresponse.WebUrl+'" target="_blank"  ><img alt="" src="'+image+'"></a>\
                  </div>';
    }
  }

if (myresponse.Type == 'Redirect') {
    if (myresponse.RedirectApp != '') {
   new_html+= '<div class=" col-xs-4">\
                    <a class="thumbnail" href="https://play.google.com/store/apps/details?id='+myresponse.RedirectApp+'" target="_blank"  ><img alt="" src="'+image+'"></a>\
                  </div>';
    }
  }

    }
}
counter++;
});
  // console.log($slidergalleryHtml);
  
$('#media .carousel-inner').html(new_html);
 });
  // body...
}