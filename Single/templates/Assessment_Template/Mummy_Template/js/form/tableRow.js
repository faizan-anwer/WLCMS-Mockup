// JavaScript Document

// ********************************************	Add Row
var trCount = 1;
var isFirstTimeDelete = true;
var isFirstTimeAdd = true;

function addRow(tableID){
	FormModified();

	if(isFirstTimeAdd){
		var getTopicTable = $("#topicTbl tr");
		trCount = getId(getTopicTable.eq(getTopicTable.length-1).find(".topicLableInput").attr("id"));
		isFirstTimeAdd = false;
	}
	
	var table = $("#"+tableID+" tr");
	var L = table.length-1;
	
	if(trCount < L){
		trCount = L;
	}else{
		trCount++;
	}
	
	var getRow = table.eq(1);
	var newRow = $(getRow).last().clone();
	newRow.removeAttr("style");
	newRow.find('td').children().each(function(i){
	
		switch($(this).attr("name")){
			case "option":
					$(this).attr("id",  "option" + trCount);
				break;
			case "topicLabel":
					$(this).attr("id",  "topicLabel_" + trCount);
				break;
		}

	});
	
	//	Append new row within the table
	var getDataSetsDiv = "#"+tableID+" tbody";
	$(getDataSetsDiv).append(newRow);
	
	var topicTextField = newRow.children(this).eq(1).find(".topicLableInput");
	topicTextField.focus();
}
function changeTopicTitle(trg){
	if(trg.value != blankErrMsg && trg.value != ""){
		trg.style.color = "";
	}
	populateList("selectList","topicTbl");
}
function blurTopicTitle(trg){
	if(trg.value == ""){
		trg.value = blankErrMsg;
		trg.style.color = "#F00";
	}
}
function focusTopicTitle(trg){
	if(trg.value == blankErrMsg){
		trg.value = "";
		trg.style.color = "#000000";
	}
}
// ********************************************	Delete Row
function deleteRow(tableID) {

	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;
		var canDelete = false;
		
		if(isFirstTimeDelete){
			isFirstTimeDelete = false;
			trCount = rowCount - 2;
		}
		
		for(var i=0; i<rowCount; i++) {
			
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
			
			if(chkbox != null && chkbox.checked == true && chkbox.getAttribute("id") != "checkAll") {
				if(!canDelete){
					//	Just Ask in first time
					if(confirm("Are you sure you want to delete selected item(s)?")){
						canDelete = true;
						
						//^^^^^^^^^^^^^^^^^^^^^^^^^^^^ LCMS-10365
						document.getElementById("checkAll").checked = false;
						//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
						
						FormModified();
						
					}else{
						//	Terminate this function if cancel
						return;
					}
				}
				
				if(canDelete){
					table.deleteRow(i);
					rowCount--;
					i--;
				}
			}
		}
	}catch(e) {
		alert(e);
	}
	
	populateList("selectList","topicTbl");
}

// ********************************************	Radio button fucntionality on check box
var currentCheckItemId = "";

function radioFn(chk){
	if(chk.checked){
		try{
			document.getElementById(currentCheckItemId).checked = false;
		}catch(e){
			
		}
		currentCheckItemId = chk.id;
	}else{
		currentCheckItemId = "";
	}
}

// ********************************************	Check All
function checkAll(chk){
	$(chk).parent().parent().parent().find('.gridSNoCell').each(function(index,element){
		//alert(index + " " + (index > 0));
		if( index > 0){
			if(chk.checked){
				$(this).find('input').attr('checked','checked');
			}else{
				$(this).find('input').removeAttr('checked');
			}
		}
	});
}

// ********************************************	Topic List
function populateList(className,tableID) {

	var listElement = document.createElement("select");
	//listElement.setAttribute("class","topicSelect");
	//listElement.setAttribute("onchange", "FormModified()");

	listElement.className = "topicSelect";
	
	//alert(Boolean(window.addEventListener) + " - " + Boolean(window.attachEvent) );
	
	if(window.addEventListener) {
	    listElement.addEventListener("change", FormModified);
	} else if (window.attachEvent){
		listElement.attachEvent("onchange", FormModified);
	}
	
	var table = document.getElementById(tableID);
	
	var rowCount = table.rows.length;
	var opt_i = 0;
	
	//	Get options
	for(var i=0; i<rowCount; i++){
		if(i > 1){
			var titleCell = table.rows[i].cells[1].childNodes[0];
			var titleLabel = titleCell.value;
			var titleId = getId(titleCell.getAttribute("id"));
			
			if(titleLabel != blankErrMsg && titleLabel != ""){
				listElement.options[opt_i] = (new Option(titleLabel, titleId));
				opt_i++;
			}
		}
    }
	
	topicSelectedArray = [];
	
	//	Get last selected value
	//alert($("."+className).html());
	
	//$(".topicSelect").each(function(i) {
	$("."+className).each(function(i) {
		//topicSelectedArray[i] = $(this).val();
		
		for(var j=1; j<=listElement.childNodes.length; j++){
			var trg = $(this).children(this).get(0)[j-1];
			
			if(trg != null)
			{
				if(trg.getAttribute("selected"))
				{
					topicSelectedArray[i] = trg.value;
					//alert(topicSelectedArray[i]);
					break;
				}
			}
			
		};
		
    });
	
	//	Clone topic table in each list of the slot
	//$("."+className).html(listElement);
	
	$("."+className).each(function(index, element) {
		//listElement.setAttribute("value",topicSelectedArray[index]);

		var cloneList = listElement;
        $(this).html(cloneList.cloneNode(true));
		
		for(var j=1; j<=listElement.childNodes.length; j++){
			
			var optTrg = $(this).children(this).get(0)[j-1];
			//alert(Number(optTrg.value) + " == " + Number(topicSelectedArray[index]) + ", " + (Number(optTrg.value) == Number(topicSelectedArray[index])));
			
			if(Number(optTrg.value) == Number(topicSelectedArray[index])){
				optTrg.selected = true;
			}
		};
    });
	
	//	Set last selected value
	/*$(".topicSelect").each(function(i) {
		$(this).val(topicSelectedArray[i]);
		$(this).attr("id","topicSelect"+(i+1));
    });*/
	//FormModified();
}

function getId (val){
	var arr = val.split("_");
	return(arr[1]);
}