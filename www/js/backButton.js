    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {
        if ($('#videoModal').css('display') == 'block')
        {

            $('#videoModal').css('display' , 'none');
            $('#myModal').css('display' , 'block');
            $('#video_list').css('display', 'block');
            window.screen.orientation.lock('portrait');
            showBannerAtPosition();
            $('#videoplayer').attr('src', '');
        }

        else if ($('#myModal').css('display') == 'block')
        {
            $('#videoModal').css('display' , 'none');
            $('#myModal').css('display' , 'none');
            $('#video_list').css('display', 'block');
            $('#videoplayer').attr('src', '');
            window.screen.orientation.lock('portrait');
            showBannerAtPosition();
        }
        else
        {
            $('.complete').addClass('myoverlay');
             $('#backbutton').css('display','block');
             showBannerAtPosition();
       }
   }

