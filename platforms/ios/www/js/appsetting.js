
var responseArray=[];
function appSetting(pkgname)
{
var base_url = "http://appqubz-001-site1.etempurl.com/";
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/vi/GetApplicationSetting/PakegName?pakgeName="+pkgname,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "03ce7257-9417-4006-963b-030143c6cdfe"
  }
}
var rowDisplay = '';

$.ajax(settings).done(function (response)
{
  var logo = response.Log.split('~');
  var logo = base_url+logo[1];
  var row =  response.RowDisplay;
  var appActive = response.IsActive;
  var checktitle = response.IncludeHeader;
  var youtubeApi = response.YouTubeApiKey;
  var admobSetting = response.AdMob;
  if(appActive == true)
  {
     $('#mainSlider').css('display','block');
    $('.latest-blog').css('display','block');
  }
  else
  {
    $('#mainSlider').css('display','none');
    $('.latest-blog').css('display','none');
   
  }

  if(row == 1 )
  {
    responseArray.push('s12');
  }
  else if(row == 2) {
  responseArray.push('s6');  
 // $('.lazyloadingImagePost').css('min-height' , '150px');
  }
  else if(row == 3) {
 responseArray.push('s4');
  }
  else if(row != 1 || row != 2 || row != 3)
  {
    responseArray.push('s6'); 
  }


  $("#logo_src").attr("src",logo);
  $(".model_logo_img").attr("src",logo);
  $( ".getname" ).html( response.Title );
  if(response.Discraption == '' || response.Discraption == null )
   {
    $('.descriptionDiv .entry').css('display','none');
   }
   else
   {
  $( "#descriptionId" ).html( response.Discraption );  
   }
   $('.carousel').carousel({
         interval: 1000
    });
  $('.navbar').css('display','block');
  $('.descriptionDiv').css('display','block');
  $(".backgroundClor").css('background-color', response.ActionBarColor);
  $("body").css('background-color', response.ListingItemBackgroundColor);
  $('.slider-slick .overlay').css('background','linear-gradient(to left,'+response.ActionBarColor+', #c4c4c4)');
  $('.slider-slick .overlay').css('background','-webkit-linear-gradient(to left,'+response.ActionBarColor+', #c4c4c4)');
  $('.w3-bar').css('background-color', response.ActionBarColor);
  StatusBar.backgroundColorByHexString(response.ActionBarColor);
  var border = "5px solid "+' '+response.ActionBarColor;  
  $('#backbutton .main_bar').css('border-bottom' ,border );
  $('.my_lazy_loader .getname').css('border-bottom' ,'2px solid '+' '+response.ActionBarColor );
  $('.my_lazy_loader .getname').css('color' ,response.ActionBarColor );
  $('.exit_app').html(response.Title);
  $('.exit_app').css('color' ,response.ActionBarColor );
  var gradianBackground= '-webkit-linear-gradient(#000,'+response.ActionBarColor+')';
  $('.lazy_loader_text').css('background' ,gradianBackground);
 $('')
  var Notificationid = response.NotificationOneSignalId;
  responseArray.push(Notificationid);
  var admobLimit = response.AdMobLimit;
  responseArray.push(admobLimit);
  var AdMobBannerId = response.AdMobBannerId;
  responseArray.push(AdMobBannerId);
  var AdMobInterstitialId = response.AdMobInterstitialId;
  responseArray.push(AdMobInterstitialId);
  if(checktitle == true)
  {
    //alert('asdasd');
   responseArray.push('includeTitle'); 
  }
  else
  {
    responseArray.push('withoutTitle'); 
  }

if(youtubeApi != ''){
  responseArray.push(youtubeApi);
}
else
{
  responseArray.push('AIzaSyCBpW5wgGXTdt4nLvWo_Tb7wIa1crCHirk');
}
if (admobSetting == true) {
    responseArray.push('admobRunning');
  }
  else{
responseArray.push('admobStop');
  }
  localStorage.setItem("item",JSON.stringify(responseArray));

 }).error(function(error){
  $('.navbar').css('display','none');
  $('.descriptionDiv').css('display','none');
  window.location.href = "ajaxissue.html";
  });

return responseArray; 
}

function appSettingInterval(pkgname)
{
var base_url = "http://appqubz-001-site1.etempurl.com/";
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/vi/GetApplicationSetting/PakegName?pakgeName="+pkgname,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "03ce7257-9417-4006-963b-030143c6cdfe"
  }
}
var rowDisplay = '';

$.ajax(settings).done(function (response)
{
  var logo = response.Log.split('~');
  var logo = base_url+logo[1];
  var row =  response.RowDisplay;

  $("#logo_src").attr("src",logo);
  $(".model_logo_img").attr("src",logo);
$( ".getname" ).html( response.Title );
   if(response.Discraption == '' || response.Discraption == null )
   {
    $('.descriptionDiv .entry').css('display','none');
   }
   else
   {
  $( "#descriptionId" ).html( response.Discraption );  
   }
  $(".backgroundClor").css('background-color', response.ActionBarColor);
  $("body").css('background-color', response.ListingItemBackgroundColor);
  $('.slider-slick .overlay').css('background','linear-gradient(to left,'+response.ActionBarColor+', #c4c4c4)');
  $('.slider-slick .overlay').css('background','-webkit-linear-gradient(to left,'+response.ActionBarColor+', #c4c4c4)');
  $('.w3-bar').css('background-color', response.ActionBarColor);
 
 }).error(function(error){
  window.location.href = "ajaxissue.html";
 });
}

function oneSignalNotification()
{
  var paramkeyArray=["onesignal"];
    CustomConfigParameters.get(function(configData){
        console.log(configData);
        console.log(configData.onesignal);
        var notificationId = configData.onesignal;
 var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };
    window.plugins.OneSignal
    .startInit(notificationId)
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
 //  window.plugins.OneSignal.enableNotificationsWhenActive(true);
//window.plugins.OneSignal.enableInAppAlertNotification(false);
   },function(err){
      console.log(err);
      //alert(err);
    },paramkeyArray);
}
// featured app model 

function featuredAppModel(pakgeName)
{
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://appqubz-001-site2.etempurl.com/api/vi/GetFeatureApp/PakegName?pakgeName="+pakgeName,
  "method": "GET",
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "5f729608-f77d-4570-978d-eb6d0ba352b0"
  }
}
var base_url = "http://appqubz-001-site1.etempurl.com/";
var featurdAppHtml = '';
$.ajax(settings).done(function (response) {
   $.each( response, function( key, myresponse ) {
var icon = myresponse.Logo.split('~');
var myicon = base_url+icon[1];
featurdAppHtml +=  '<div class="row featured_app_row">';
       featurdAppHtml +=  '<a href="'+myresponse.RedirectLink+'">';
       featurdAppHtml +=  '<div class="col eachsize s4">';
       featurdAppHtml +=  '<img src="'+myicon+'" class="img-responsive" style="height: 81px;">';
       featurdAppHtml +=  '</div>';
       featurdAppHtml +=  '<div class="col eachsize s7" style="margin-top:12px;padding-left: 13px;">';
       featurdAppHtml +=  '<span class="featured_app_text">'+myresponse.Title+'</span>';
       featurdAppHtml +=  '</div>';
       featurdAppHtml +=  '</a>';
     featurdAppHtml +=  '</div>';

   });
   $('#main_featured_app').html(featurdAppHtml);
  
});
}