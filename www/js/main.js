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
		 localStorage.setItem("runVideoPlayer",'');
	localStorage.setItem("counterAds",'0');
cordova.getAppVersion.getPackageName(function(pkgname){
			appSetting(pkgname);
});
		$(".loader").delay(3000).hide('slide',500,function()
		{
	cordova.getAppVersion.getPackageName(function(pkgname){
			var response=JSON.parse((localStorage.getItem("item")));
			sliderSettingWithData(pkgname);
			
			getAllPost(response[0], pkgname);
			featuredAppModel(pkgname);
});
	});
		setTimeout(
    function() {
       $('.my_lazy_loader').removeClass( "hide" );
    }, 3500);
		//	$('.my_lazy_loader').removeClass( "hide" );
	//$(".complete").removeClass( "hide" );

	

	
	setInterval(function(){ ajaxContinuesly(); }, 6000);
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
