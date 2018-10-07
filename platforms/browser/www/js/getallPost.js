function getAllPost(postSize , pakgeName) {
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
      /* video data */
      var image_url = myresponse.Url.split('~');
      var image = base_url+image_url[1];
      var response = JSON.parse(localStorage.getItem("item"));
      var checkTitle = response[5];
      var subcategoryId = myresponse.SubcategoryId;
      var $title = myresponse.Title;
      /* end video data */


      if (myresponse.Active== true) {
        if(myresponse.Type == 'Video')
        {
          html += '<a class="single_post_view" data-toggle="modal" id="'+myresponse.Id+'" onclick="openVideoModel(this)" >';
          html += '<div  style="margin-bottom:3px;" class="col eachsize '+postSize+'" >';
          html += '<div class="entry ">';
          if (postSize == 's4') { 
          html += '<img class="lazyloadingImagePost" style="min-height:100px" src="'+image+'" alt="" >';
           }
          else if (postSize == 's6') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else if (postSize == 's12') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           
              
          if(checkTitle == 'withoutTitle')
          {
            html += '';
          }
          else if(checkTitle != 'withoutTitle' && (myresponse.Title === null || myresponse.Title == ''))
          { 
            html += '<div class="desc">';
            html += '<p style="text-align:center;">No Title</p>';               
            html += '</div>';
          }
          else
          {
            if ($title.length < 17) {
                           html += '<div class="desc">';
            html += '<p style="text-align:center;">'+myresponse.Title+'</p>';               
            html += '</div>';
           }
              else {
                html += '<div class="desc">';
            html += '<p style="text-align:center;">'+$title.slice(0 , 15)+'..'+'</p>';               
            html += '</div>';
                            
           }
          }
          html += '</div>';
          html += '</div>';
          html += '</a>';


        }
        if(myresponse.Type == 'Wallpaper')
        {
          html += '<a  class="single_post_view" data-toggle="modal" row_id ="'+postSize+'" category_id ="'+subcategoryId+'" onclick="openWallpaper(this)" >';
          html += '<div  style="margin-bottom: 5px;" class="col eachsize '+postSize+'" >';
          html += '<div class="entry ">';
         if (postSize == 's4') { 
          html += '<img class="lazyloadingImagePost" style="min-height:100px" src="'+image+'" alt="" >';
           }
          else if (postSize == 's6') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else if (postSize == 's12') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
          if(checkTitle == 'withoutTitle')
          {
            html += '';
          }
          else if(checkTitle != 'withoutTitle' && (myresponse.Title === null || myresponse.Title == ''))
          {
            html += '<div class="desc">';
            html += '<p style="text-align:center;">No Title</p>';               
            html += '</div>';
          }
          else
          { 
            html += '<div class="desc">';
            html += '<p style="text-align:center;">'+myresponse.Title+'</p>';               
            html += '</div>';
          }
          html += '</div>';
          html += '</div>';
          html += '</a>';
        }
//weburl
if (myresponse.Type == 'WebUrl') {
  if (myresponse.WebUrl != '') {
   html += '<a class="single_post_view" webLink="'+myresponse.WebUrl+'"  onclick="openLink(this)" >';
   html += '<div  style="margin-bottom: 5px;" class="col eachsize '+postSize+'" >';
   html += '<div class="entry">';
   if (postSize == 's4') { 
          html += '<img class="lazyloadingImagePost" style="min-height:100px" src="'+image+'" alt="" >';
           }
          else if (postSize == 's6') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else if (postSize == 's12') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }

          if(checkTitle == 'withoutTitle')
          {
            html += '';
          }
          else if(checkTitle != 'withoutTitle' && (myresponse.Title === null || myresponse.Title == ''))
          {
    html += '<div class="desc">';
    html += '<p style="text-align:center;">No Title</p>';               
    html += '</div>';
  }
  else
  { 
    html += '<div class="desc">';
    html += '<p style="text-align:center;">'+myresponse.Title+'</p>';               
    html += '</div>';
  }

  html += '</div>';
  html += '</div>';
  html += '</a>'; 
  
}
}
  //redierect app 
  if (myresponse.Type == 'Redirect') {
    if (myresponse.RedirectApp != '') {

     html += '<a class="single_post_view" webLink="https://play.google.com/store/apps/details?id='+myresponse.RedirectApp+'"  onclick="openLink(this)">';
    
     html += '<div  style="margin-bottom: 5px;" class="col eachsize '+postSize+'" >';
     html += '<div class="entry">';
   if (postSize == 's4') { 
          html += '<img class="lazyloadingImagePost" style="min-height:100px" src="'+image+'" alt="" >';
           }
          else if (postSize == 's6') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else if (postSize == 's12') { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }
           else { 
          html += '<img class="lazyloadingImagePost" style="min-height:150px" src="'+image+'" alt="" >';
           }

         if(checkTitle == 'withoutTitle')
          {
            html += '';
          }
          else if(checkTitle != 'withoutTitle' && (myresponse.Title === null || myresponse.Title == ''))
          {
    html += '<div class="desc">';
    html += '<p style="text-align:center;">No Title</p>';               
    html += '</div>';
  }
    else
    { 
      html += '<div class="desc">';
      html += '<p style="text-align:center;">'+myresponse.Title+'</p>';               
      html += '</div>';
    }

    html += '</div>';
    html += '</div>';
    html += '</a>'; 
  }
}

}
});
    $('#main_content').html(html);

    $('.my_lazy_loader').hide();
    $(".complete").removeClass( "hide" );
  })

}