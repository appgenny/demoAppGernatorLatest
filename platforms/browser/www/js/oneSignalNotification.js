function oneSignalNotification()
{
  var paramkeyArray=["onesignal"];
    CustomConfigParameters.get(function(configData){
        console.log(configData);
        alert(configData.onesignal);
        var notificationId = configData.onesignal;
 var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };
window.plugins.OneSignal
    .startInit(notificationId)
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
 },function(err){
      console.log(err);
      //alert(err);
    },paramkeyArray);
}