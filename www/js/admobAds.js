var admobid = {};
function onDeviceReady()
{

  var paramkeyArray=["admobBannerId","admobInterstitialId"];
  CustomConfigParameters.get(function(configData){
  console.log(configData);
  console.log(configData.admobBannerId);
  console.log(configData.admobInterstitialId);
  if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: configData.admobBannerId,
    interstitial: configData.admobInterstitialId,
    rewardvideo: 'ca-app-pub-3940256099942544/5224354917',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: configData.admobBannerId,
    interstitial: configData.admobInterstitialId,
    rewardvideo: 'ca-app-pub-3940256099942544/1712485313',
  };
} else {
  admobid = { // for Windows Phone
    banner: configData.admobBannerId,
    interstitial: configData.admobInterstitialId,
    rewardvideo: '',
  };
};
},function(err){
  console.log(err);
},paramkeyArray);
  
  initAd(); 
  setTimeout(
    function() {
      initBannerAndinterstitial();
      showBannerAtPosition();
    }, 5000);
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
      isTesting: false, // set to true, to receiving test ad for testing purpose
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
    $(document).on('onAdPresent', function(e){
    });
    $(document).on('onAdLeaveApp', function(e){
    });
    
    $(document).on('onAdDismiss', function(e){
      if(typeof e.originalEvent !== 'undefined') e = e.originalEvent;
      var data = e.data || e;
      if(data.adType === 'interstitial') {
      alert('onAdDismiss');
      var openVideoModelId =  localStorage.getItem("openVideoModelId");
      alert('my open Model');
      if(openVideoModelId != '' || openVideoModelId != null)
       {
        openModel(openVideoModelId);
        localStorage.setItem("openVideoModelId",'');
       }
      } 
        else if(data.adType === 'rewardvideo') {
        $('#h3_video').text('Rewarded Video');
        $('#btn_showvideo').prop('disabled', true);
      }
    });

    $(document).on('resume', function(){
     alert('onresume');
     var openVideoModelId =  localStorage.getItem("openVideoModelId");
      if(openVideoModelId != '' || openVideoModelId != null)
       {
        openModel(openVideoModelId);
        localStorage.setItem("openVideoModelId",'');
       }
     // AdMob.showInterstitial();
    });
  }
  
  function initBannerAndinterstitial()
  {
    AdMob.createBanner({
      adId: admobid.banner,
      position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: false, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: ' '
  });  
    AdMob.prepareInterstitial({
      adId: admobid.interstitial,
    isTesting: false, // TODO: remove this line when release
    autoShow: false
  });  
  }
  function showBannerAtPosition(){
    if(AdMob) AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
  }
  
  function showIndustrialAd()
  {
    AdMob.showInterstitial();
   }
  function  prepareInterstitialAd()
  {
    AdMob.prepareInterstitial({
      adId: admobid.interstitial,
      autoShow: false,
    isTesting: false // TODO: remove this line when release
  });
  }
  function initAdmobWithoutBanner() {
    AdMob.removeBanner(); 
  }

  if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    onDeviceReady();
  }