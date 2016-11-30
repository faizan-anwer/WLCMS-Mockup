function XMLtoString(elem){
	var serialized;
	try {
		// XMLSerializer exists in current Mozilla browsers
		serializer = new XMLSerializer();
		serialized = serializer.serializeToString(elem);
	} 
	catch (e) {
		// Internet Explorer has a different approach to serializing XML
		serialized = elem.xml;
	}
	return serialized;
}

function setXml(xmlDoc){

	//	errPanelArr Initialize every time when save click
	errPanelArr = [];
	
	// =======================================================	Global Variables

		//	ID ------------------------------------------------
		var global_Id = xmlDoc.getElementsByTagName("id")[0];
		var gameIdElm = $("#gameId");
		/*try{
			global_Id.childNodes[0].nodeValue = gameIdElm.val();
		}catch(e){*/
			global_Id.text = gameIdElm.val();
		//}
		blankValidation(gameIdElm.parent(),gameIdElm.val(),gameIdElm.parent().parent().parent().parent().parent().parent().parent());

		
		//	SubTitle ------------------------------------------------
		var global_SubTitle = xmlDoc.getElementsByTagName("subTitle")[0];
		var gameSubTitleElm = $("#subTitle");
		/*try{
			global_SubTitle.childNodes[0].nodeValue = gameSubTitleElm.val();
		}catch(e){*/
			global_SubTitle.text = gameSubTitleElm.val();
		//}
		blankValidation(gameSubTitleElm.parent(),gameSubTitleElm.val(),gameSubTitleElm.parent().parent().parent().parent().parent().parent().parent());


	// =======================================================	Functionality Toggles

		//	QA Mode ------------------------------------------------
		var funcToggles_canQaDemo = xmlDoc.getElementsByTagName("canQaDemo")[0];
		/*try{
			funcToggles_canQaDemo.childNodes[0].nodeValue = $("#canQaDemo").prop('checked');
		}catch(e){*/
			funcToggles_canQaDemo.text = String($("#canQaDemo").prop('checked'));
		//}

		
		//	SubTitle ------------------------------------------------
		var funcToggles_isTimed = xmlDoc.getElementsByTagName("isTimed")[0];
		/*try{
			funcToggles_isTimed.childNodes[0].nodeValue = $("#isTimed").prop('checked');
		}catch(e){*/
			funcToggles_isTimed.text = String($("#isTimed").prop('checked'));
		//}



	// =======================================================	Review And Analyze Toggles

		//	Analyze ------------------------------------------------
		var RAA_canAnalyze = xmlDoc.getElementsByTagName("canAnalyze")[0];
		/*try{
			RAA_canAnalyze.childNodes[0].nodeValue = $("#canAnalyze").prop('checked');
		}catch(e){*/
			RAA_canAnalyze.text = String($("#canAnalyze").prop('checked'));
		//}
		
		//	Review ------------------------------------------------
		var RAA_canReview = xmlDoc.getElementsByTagName("canReview")[0];
		/*try{
			RAA_canReview.childNodes[0].nodeValue = $("#canReview").prop('checked');
		}catch(e){*/
			RAA_canReview.text = String($("#canReview").prop('checked'));
		//}



	// =======================================================	Policies

		//	Mastery ------------------------------------------------
		var policies_mastery = xmlDoc.getElementsByTagName("mastery")[0];
		var masteryElm = $("#mastery");
		/*try{
			policies_mastery.childNodes[0].nodeValue = masteryElm.val();
		}catch(e){*/
			policies_mastery.text = masteryElm.val();
		//}
		//blankValidation(masteryElm.parent(),masteryElm.val(),masteryElm.parent().parent().parent().parent().parent().parent().parent());
		numberOnly(masteryElm.parent(),masteryElm.val(),masteryElm.parent().parent().parent().parent().parent().parent().parent());

		//	Maximum Attempts ------------------------------------------------
		//var policies_maxAttempts = xmlDoc.getElementsByTagName("maxAttempts")[0];
		//var maxAttemptsElm = $("#maxAttempts");
		//policies_maxAttempts.childNodes[0].nodeValue = maxAttemptsElm.val();
		//blankValidation(maxAttemptsElm.parent(),maxAttemptsElm.val(),maxAttemptsElm.parent().parent().parent().parent().parent().parent().parent());

		//	Type ------------------------------------------------
		var policies_type = xmlDoc.getElementsByTagName("type")[0];
		policies_type.setAttribute("value", $("#type").val());
		
		
	// =======================================================	Assessment

		//	Topic Bank ------------------------------------------------
		var assessment_topic = xmlDoc.getElementsByTagName("topic")[0];
		
		//	Copy topic nodes from xmlDoc			
		var copyTopicNode = assessment_topic.childNodes[0];
		
		//	Get topic table from HTML
		var getTopicTableRow = $("#topicTbl tr");
		var thisPanel = getTopicTableRow.parent().parent().parent().parent();
		
		//	Validation - At Least one row show in the table
		if(rowValidation(getTopicTableRow.length, 2, thisPanel)){
			
			//	Remove old option nodes from xmlDoc
			var oldTopicNode = assessment_topic.getElementsByTagName("list");
			var xLength = oldTopicNode.length;
			
			for(var l=0;l<xLength;l++){
				try{
					assessment_topic.removeChild(assessment_topic.childNodes[l]);
				}catch(e){
					assessment_topic.removeChild(assessment_topic.childNodes[0]);
				}
			}
			
		}
		//var topicI = 1;
		getTopicTableRow.each(function(i, element) {
			if(i > 1){
				var topicElm = $(this).find(".gridCell input");
				var topicLabel = topicElm.val();
				blank2Validation(topicElm.parent(),topicLabel,topicElm.parent().parent().parent().parent().parent().parent())
				
				//	Set topic ID and Title
				var topicLabelId = getId(topicElm.attr("id"));
				copyTopicNode.setAttribute("value",topicLabelId);
				/*try{
					copyTopicNode.childNodes[0].nodeValue = topicLabel;
				}catch(e){*/
					copyTopicNode.text = topicLabel;
				//}
				
				//	Append cloned node
				assessment_topic.appendChild(copyTopicNode.cloneNode(true));
			}
		});
		
		
		
		//	Item Bank ------------------------------------------------
		
		//	Get slot from XML
		var getSlotXmlRow = xmlDoc.getElementsByTagName("itemBank")[0];
		
		//	Get slot from HTML
		var getSlotTableRow = $("#slotTbl tr");
		
		getSlotTableRow.each(function(i, element) {
			if(i > 0){
				var slotElm = $(this).find(".bankName");
				var slotLabel = slotElm.val();
				blankValidation(slotElm.parent(),slotLabel,slotElm.parent().parent().parent().parent().parent().parent());

				var slotBankId = $(this).find(".bankId").val();
				var topicIdElm = $(this).find(".selectList").children(this);
				var topicId = topicIdElm.val();
				if(topicId == null){
					topicId = "";
				}
				blankValidation(topicIdElm.parent(),topicId,topicIdElm.parent().parent().parent().parent().parent().parent().parent());
				
				/*$(this).find(".selectList").children(this).children(this).each(function(s){
					
					if($(this).prop("selected")){
						topicId = s+1;
						return false;
					};
					
				});*/
				
				//	Set slot label
				getSlotXmlRow.childNodes[i-1].setAttribute("label",slotLabel);
				getSlotXmlRow.childNodes[i-1].setAttribute("bankId",slotBankId);
				getSlotXmlRow.childNodes[i-1].setAttribute("topicId",topicId);
			}
		});
	
	if(errPanelArr.length <= 0){
		document.getElementById("txtXml").value = XMLtoString(xmlDoc);
		_IsForModified = false;
	}else{
		document.getElementById("txtXml").value = "invalid";
	}
}