cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admobpro.AdMob",
    "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro",
    "clobbers": [
      "window.AdMob"
    ]
  },
  {
    "id": "onesignal-cordova-plugin-pgb-compat.OneSignal",
    "file": "plugins/onesignal-cordova-plugin-pgb-compat/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin-pgb-compat",
    "clobbers": [
      "OneSignal"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-extension": "1.5.4",
  "cordova-plugin-admobpro": "2.31.6",
  "onesignal-cordova-plugin-pgb-compat": "2.0.10"
};
// BOTTOM OF METADATA
});