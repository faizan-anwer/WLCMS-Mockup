//-----------------------------------------------------------------------------------------------------------

function loadData (Data){
	jQuery(document).ready(function(jQuery) {
		var getHeading = jQuery(document).find(".sceneTitle div");
	
		//alert((getHeading.find("p").html() != "") && (getHeading.html() != ""));
		
		if((getHeading.find("p").html() != "") && (getHeading.html() != "")){
			jQuery(document).find("#MainDiv").css("top", getHeading.height()+10);
		}else{
			jQuery(document).find("#MainDiv").css("top", 0);
		}
	
		var flashvars = {};
		flashvars.xmlData = escape(Data);
		var params = {
			menu: "false", wmode: "transparent"
			};
		var attributes = {};
		swfobject.embedSWF("../Assessment_Template/Mummy_Template/swf/mummy.swf", "FlashID", "960px", "410px", "9.0.0", false ,flashvars, params, attributes);
		document.getElementById("loader").style.display = "none";
	});
}

function getFlashMovie(movieName) {
	var isIE = navigator.appName.indexOf("Microsoft") != -1;
	return (isIE) ? window[movieName] : document[movieName];
}

//-----------------------------------------------------------------------------------------------------------

//var xmlDoc = jQuery.parseXML(xmlSampleData_ForCustomTemplate);
//$xml = jQuery(xmlDoc);
loadData(xmlSampleData_ForCustomTemplate);

//xmlData.init("xml/mummy.xml",loadData);