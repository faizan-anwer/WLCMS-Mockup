// JavaScript Document

var xmlData = {
	init: function(path,returnFn){
		jQuery.ajax({
			type: "GET",
			url: path,
			dataType: "xml",
			success: function(xml) {
				returnFn(xml);
			}
		});
	}
}