function openLink(object) {
		//count ads 
var y = localStorage.getItem("counterAds");
var x  = 1;

var sum = (x*100 + y*100) / 100;
 localStorage.setItem("counterAds",sum);
	//End count ads 
 initApp();
var webLink = $(object).attr('webLink');
window.open(webLink,"_blank");
}
