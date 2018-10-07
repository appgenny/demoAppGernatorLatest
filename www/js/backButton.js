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
            window.screen.orientation.lock('portrait');
          //  showBanner();
            $('#videoplayer').attr('src', '');
        }

        else if ($('#myModal').css('display') == 'block')
        {
            $('#videoModal').css('display' , 'none');
            $('#myModal').css('display' , 'none');
            $('#videoplayer').attr('src', '');
            window.screen.orientation.lock('portrait');
            //showBanner();
        }
        else
        {
            $('.complete').addClass('myoverlay');
             $('#backbutton').css('display','block');
             //showBanner();
       }
   }

