function mainarea()
{
	if(navigator.network.connection.type == Connection.NONE) {
		StatusBar.hide();
		$(".loader").removeClass('hide');
		$(".loader").delay(5000).hide('slide',500,function()
		{
			window.location.href = "noconnection.html";	
			StatusBar.show();
		});
		
	}
	else
	{

		
		localStorage.setItem("openVideoModelId",'0');
		localStorage.setItem("runVideoId",'0');
		localStorage.setItem('category_id_wallpaper' , '0');
		localStorage.setItem("runVideoplatform",'0');
		localStorage.setItem("interAdshown",'0');
		localStorage.setItem("runVideoPlayers",'0');
		localStorage.setItem("counterAds",'0');
	//	cordova.getAppVersion.getPackageName(function(pkgname){
			appSetting('com.timesvideos.oldhindivediosongs');
		//});
		$(".loader").delay(3000).hide('slide',500,function()
		{
			//cordova.getAppVersion.getPackageName(function(pkgname){
				var response=JSON.parse((localStorage.getItem("item")));
				sliderSettingWithData('com.timesvideos.oldhindivediosongs');

				getAllPost(response[0], 'com.timesvideos.oldhindivediosongs');
				featuredAppModel('com.timesvideos.oldhindivediosongs');
			//});
		});
		setTimeout(
			function() {
				$('.my_lazy_loader').removeClass( "hide" );
			}, 3500);
		//	$('.my_lazy_loader').removeClass( "hide" );
	//$(".complete").removeClass( "hide" );

	

	
	setInterval(function(){/* ajaxContinuesly();*/ }, 6000);
}


}

function ajaxContinuesly()
{

	if(navigator.network.connection.type == Connection.NONE) {
		if (confirm("Please check Your Network Connection"))
		{
			
			window.location.href = "noconnection.html";
			
		}
		else
		{
			window.location.href = "index.html";
			
		}
	}
	else 
	{
		cordova.getAppVersion.getPackageName(function(pkgname){
			var response=JSON.parse((localStorage.getItem("item")));
			appSettingInterval(pkgname);
		//sliderSettingWithData(pkgname);
		getAllPost(response[0],pkgname);
		featuredAppModel(pkgname);
	});
	}
}
