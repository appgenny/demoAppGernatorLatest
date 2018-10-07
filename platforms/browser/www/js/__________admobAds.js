var admobid = {};
  if( /(android)/i.test(navigator.userAgent) ) {
    admobid = { // for Android
      banner: 'ca-app-pub-3940256099942544/6300978111',
      interstitial: 'ca-app-pub-3940256099942544/1033173712',
      rewardvideo: 'ca-app-pub-3940256099942544/5224354917',
    };
  } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
      banner: 'ca-app-pub-3940256099942544/4480807092',
      interstitial: 'ca-app-pub-3940256099942544/4411468910',
      rewardvideo: 'ca-app-pub-3940256099942544/1712485313',
    };
  } else {
    admobid = { // for Windows Phone
      banner: 'ca-app-pub-6869992474017983/8878394753',
      interstitial: 'ca-app-pub-6869992474017983/1355127956',
      rewardvideo: '',
    };
  }

  function initAd(){
    AdMob.getAdSettings(function(info){
      console.log('adId: ' + info.adId + '\n' + 'adTrackingEnabled: ' + info.adTrackingEnabled);
    }, function(){
      console.log('failed to get user ad settings');
    });

    AdMob.setOptions({
      // adSize: 'SMART_BANNER',
      position: AdMob.AD_POSITION.BOTTOM_CENTER,
      isTesting: true, // set to true, to receiving test ad for testing purpose
      bgColor: 'black', // color name, or '#RRGGBB'
       autoShow: false // auto show interstitial ad when loaded, set to false if prepare/show
      // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
    });

    // new events, with variable to differentiate: adNetwork, adType, adEvent
    $(document).on('onAdFailLoad', function(e){
      // when jquery used, it will hijack the event, so we have to get data from original event
      if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
      var data = e.detail || e.data || e;

      alert('error: ' + data.error +
          ', reason: ' + data.reason +
          ', adNetwork:' + data.adNetwork +
          ', adType:' + data.adType +
          ', adEvent:' + data.adEvent); // adType: 'banner', 'interstitial', etc.
    });
    $(document).on('onAdLoaded', function(e){
        if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
        var data = e.data || e;

        if(data.adType === 'interstitial') {
            alert('onAdLoaded');

        } else if(data.adType === 'rewardvideo') {
            $('#h3_video').text('Rewarded Video Ready');
            $('#btn_showvideo').prop('disabled', false);
        }
    });
    $(document).on('onAdPresent', function(e){
    });
    $(document).on('onAdLeaveApp', function(e){
    });
    $(document).on('onAdDismiss', function(e){
        if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
        var data = e.data || e;

        if(data.adType === 'interstitial') {
        alert('onAdDismiss');
        } else if(data.adType === 'rewardvideo') {
            $('#h3_video').text('Rewarded Video');
           $('#btn_showvideo').prop('disabled', true);
        }
    });

    

    // test case for #256, https://github.com/floatinghotpot/cordova-admob-pro/issues/256
    $(document).on('backbutton', function(){
      if(window.confirm('Are you sure to quit?')) navigator.app.exitApp();
    });

    // test case #283, https://github.com/floatinghotpot/cordova-admob-pro/issues/283
    $(document).on('resume', function(){
      AdMob.showInterstitial();
    });
  }

function ondeviceReadyAds()
{
  initAd();
initAdss();
}


function initAdss()
{
 
AdMob.createBanner({
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
   isTesting: true, // TODO: remove this line when release
     overlap: true,
    offsetTopBar: false,
    bgColor: 'black'
  });
AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: false,
   isTesting: true // TODO: remove this line when release
    });
showBannerAtPosition();
showIndustrialAd();
}

function  prepareInterstitialAd()
{
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: false,
    isTesting: true // TODO: remove this line when release
    });
}

function showBannerAtPosition(){
    if(AdMob) AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
  }
function showIndustrialAd()
{
  alert('show');
  AdMob.showInterstitial();
  setTimeout(
    function() {
      prepareInterstitialAd();
}, 1000);
 

}

$(document).ready(function(){

    // on mobile device, we must wait the 'deviceready' event fired by cordova
    if(/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)) {
      document.addEventListener('deviceready', ondeviceReadyAds, false);
    } else {
      ondeviceReadyAds();
    }
  });