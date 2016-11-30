
var CK_CONFIG = {

	TITLE:{
		toolbar : [
			[ 'Bold', 'Italic', 'Subscript', 'Superscript', '-', 'RemoveFormat'],
			[ 'About']
		]
	},
	CC:{
		toolbar : [
			{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
			{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
			{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
			{ name: 'insert', items: [ 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
			{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
			{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
			{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
			{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
			{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
			{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
			{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
			{ name: 'about', items: [ 'About' ] }
		]
	},
	TEXT:{
		toolbar : [
			{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
			{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
			{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
			{ name: 'insert', items: [ 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
			{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
			{ name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
			{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
			{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
			{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
			{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
			{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
			{ name: 'about', items: [ 'About' ] },
			{ name: 'others', items: [ 'Abbr' ]}
		]
	},
	ANSWER_CHOICE:{
		toolbar : [
			{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
			{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
			{ name: 'links', items: [ 'Link', 'Unlink' ] },
			{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
			{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] }
		]
	}
}

var APP = function () {

    return {
	
		//	BEGIN EDIT AND VIEW TOGGLE
		EDIT_OR_VIEW_TOGGLE : function(){
			$('#VEToggle').toggleSwitch();
		},
		//	END EDIT AND VIEW TOGGLE
		
		//	BEGIN LEFT NAV
		LEFT_NAV : {
			lastID : null,
			lastSubMenu : null,
			width : '200px',
			init : function(STATE,TRG_ID)
			{
				//	BEGIN MENU STATES 
				$(".list-sub-group .list-group-item a").click(function()
				{
					//alert($(this).find('span').text());
					if(APP.LEFT_NAV.lastSubMenu != null){
						APP.LEFT_NAV.lastSubMenu.removeClass('active');
					}
					$(this).addClass('active');
					
					APP.LEFT_NAV.lastSubMenu = $(this);
				});
				//	END MENU STATES
				
				//	BEGIN SUB MENU
				$('#leftNavPanel .sub-menu').click(function ()
				{
					var trg = $(this).parent().children('ul.list-sub-group');
					leftNavCollapse(trg,$(this));
				});	
				//	END SUB MENU
				
				//	BEGIN ACCORDIONS
				$('#leftNavPanel .btn-sub-group').click(function ()
				{
					var trgElm = $("#leftNavPanel .list-holder");
					if(trgElm.css('width') != '42px')
					{
						var panelElm = $(this).parent().children('ul.list-sub-group');
						var lastBtnElm;
						var lastPanelElm;
						
						//	---------------- Active and De-Active State Toggling
						if(APP.LEFT_NAV.lastID != null)
						{
							lastBtnElm = $("#"+APP.LEFT_NAV.lastID);
							lastPanelElm = lastBtnElm.parent().children('ul.list-sub-group');
							lastBtnElm.removeClass('active');
						}
						
						$(this).addClass('active');
						
						if(typeof panelElm.html() != 'undefined')
						{
							//	---------------- Accordion Button
							leftNavCollapse(panelElm,$(this));
							
							if(APP.LEFT_NAV.lastID != null)
							{
								if(typeof lastPanelElm.html() != 'undefined')
								{
									if(lastBtnElm.attr("id") != $(this).attr("id"))
									{
										leftNavCollapse(lastPanelElm,lastBtnElm);
									}
									else
									{
										lastBtnElm.removeClass('active');
										APP.LEFT_NAV.lastID = null;
										accordion_btn_actions("course_welcome");
										return;
									}
								}
							}
						}
						else
						{				
							//	---------------- Simple Button
							if(APP.LEFT_NAV.lastID != null)
							{
								if(lastBtnElm.attr("id") != $(this).attr("id"))
								{
									leftNavCollapse(lastPanelElm,lastBtnElm);
								}
							}
						}
						APP.LEFT_NAV.lastID = $(this).attr("id");
					}
					
					accordion_btn_actions($(this).attr("id"));
				});
				//	END ACCORDIONS
				
				//	BEGIN INITIAL STATE
				if(typeof STATE != 'undefined')
				{	
					if(typeof TRG_ID != 'undefined')
					{
						var trgBtnElm = $("#"+TRG_ID);
						var trgPanelElm = trgBtnElm.parent().children('ul.list-sub-group');
						
						trgBtnElm.addClass('active');
						
						if(typeof trgPanelElm.html() != 'undefined')
						{
							leftNavCollapse(trgPanelElm,trgBtnElm);
						}
						
						APP.LEFT_NAV.lastID = TRG_ID;
					}
					
					if(STATE == "OPEN")
					{
						toggle_leftNavPanel();
					}
				}
				//	END INITIAL STATE
				
				//	BEGIN RESIZE
				{
					//var leftNavElm = $("#leftNavPanel .list-holder");
					var leftNavElm = $("#leftNavPanel");
					analyseScreenWidth(leftNavElm);
					
					$(window).resize(function()
					{
						analyseScreenWidth(leftNavElm);
					});
				}
				//	END RESIZE
			}
		},
		//	END LEFT NAV
		
		//	BEGIN COURSE OUTLINE TREE
		LEFT_NAV_COURSE_OUTLINE : function(JSON_FILE){
			$('#tree').aciTree({
				ajax: {
					url: 'assets/plugins/aciTree/json/'+JSON_FILE+'.json'
				}
			});
			
			// Listen for the events before we init the tree	
			$('#tree').on('acitree', function(event, api, item, eventName, options)
			{
				// get the item ID
				var itemId = api.getId(item);
				if (eventName == 'selected') {
					//console.log('Item ID: ' + itemId);
				}
			});
		},
		//	END COURSE OUTLINE TREE
		
		//	BEGIN PORTLET COLLAPSE
		BODY_COLLAPSES : function(STATE){
		
			$('.portlet-btn > .portlet-title').click(function (e) {
				e.preventDefault();
				var el = jQuery(this).parent().find(".portlet-body");
				
				if (jQuery(this).find(".tools > a").hasClass("collapse")) {
					jQuery(this).find(".tools > a").removeClass("collapse").addClass("expand");
					el.slideUp(200);
				} else {
					jQuery(this).find(".tools > a").removeClass("expand").addClass("collapse");
					el.slideDown(200);
				}
			});
			
			if(STATE == "CLOSE")
			{
				jQuery('.portlet-btn > .portlet-title > .tools > a').removeClass("collapse").addClass("expand");
				jQuery('.portlet-btn > .portlet-body').css('display','none');
			}
		},
		//	END PORTLET COLLAPSE
		
		//	BEGIN ACCORDION PANEL
		ACCORDION_MOVEABLE : function(){
			$('.move-btn > .up').click(function() {
				var parent = $(this).parent().parent().parent().parent();
				parent.insertBefore(parent.prev());
			});
			$('.move-btn > .down').click(function() {
				var parent = $(this).parent().parent().parent().parent();
				$(this).parent().parent().slideDown();
				parent.insertAfter(parent.next());
			});
		},
		//	END ACCORDION PANEL
		
		//	BEGIN ROUNDED CORNERS
		APPLY_ROUNDED_CORNERS : function(){
			if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version == 8)
			{
				$('.str-navigator').corner('10px');
				$('.badge').corner('20px').css('padding', '12px 15px 25px');
				$('.str-navigator ul li').css("border",'none').corner('15px');
			}
		},
		//	END ROUNDED CORNERS
		
		//	BEGIN CKEDITOR
		CKEDITOR : function(TxtID,toolbar){

			//	Global Configuration
			CKEDITOR.config.height = '100px';
			CKEDITOR.config.extraPlugins = 'abbr';
			//CKEDITOR.config.autoParagraph = false;
			//CKEDITOR.config.enterMode = CKEDITOR.ENTER_BR;
			//CKEDITOR.config.scayt_autoStartup = true;
			
			//	Specific Configurations
			switch(toolbar){
				case "TITLE":
					CKEDITOR.replace(TxtID, CK_CONFIG.TITLE);
					break;
				
				case "STANDARD":
					CKEDITOR.replace(TxtID, CK_CONFIG.CC);
					break;
					
				case "TEXT":
					CKEDITOR.replace(TxtID, CK_CONFIG.TEXT);
					break;
				case "ANSWER_CHOICE":
					CKEDITOR.replace(TxtID, CK_CONFIG.ANSWER_CHOICE);
					break;
			}
		},
		//	END CKEDITOR
		
		//	BEGIN DATAGRID
		DATAGRID : function(TID,isMoveable,searchable,addOrDelete,sortable){
			TableManaged.init(TID,searchable,sortable,addOrDelete);
			if(isMoveable){
				TableManaged.moveable(TID);
			}
			
		},
		//	END DATAGRID
		
		//	BEGIN SEARCHGRID
		SEARCHGRID : {
			init : function(TID,searchable,sortable){
				TableManaged.init(TID,searchable,sortable,false);
			},
			columnFilter : function(TID){
				TableManaged.hide_able_column(TID);
			}
		},
		//	END SEARCHGRID
		
		//	BEGIN SAVE COURSE
		SAVE_COURSE: function(){
			
			APP.LOADING_BAR();
			
			/*$(".wrapper > .messages").html(msg('content'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);*/
		},
		//	END SAVE COURSE
		
		//	BEGIN SAVE OVERVIEW FORM
		SAVE_OVERVIEW: function(){
			
			$(".wrapper > .messages").html(msg('overview'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
		},
		//	END SAVE OVERVIEW FORM
		
		//	BEGIN SAVE SETTINGS FORM
		SAVE_SETTINGS: function(){
			
			$(".wrapper > .messages").html(msg('overview'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
		},
		//	END SAVE SETTINGS FORM
		
		//	BEGIN SAVE AVAILABILITY FORM
		SAVE_AVAILABILITY: function(){
			
			$(".wrapper > .messages").html(msg('overview'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
		},
		//	END SAVE AVAILABILITY FORM
		
		//	BEGIN SAVE PRICING FORM
		SAVE_PRICING: function(){
			
			$(".wrapper > .messages").html(msg('done'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
		},
		//	END SAVE PRICING FORM
		
		//	BEGIN SAVE MARKETING FORM
		SAVE_MARKETING: function(trg){
			
			$trgModal = $("#confirmationModal");
			
			//	BEGIN TITLE, MESSAGE AND BUTTONS
			var title = '<i class="glyphicon glyphicon-info-sign"></i> Please Confirm';
			var msg = '<p>It looks like you have unsaved work on this page. Would you like to save the work before continuing?</p>';
			var btns = '<button type="button" class="btn blue" data-dismiss="modal">YES</button>'+
						'<button type="button" class="btn btn-default" data-dismiss="modal">NO</button>';
			//	END TITLE, MESSAGE AND BUTTONS
			
			$trgModal.find(".modal-title").html(title);
			$trgModal.find(".modal-body").html(msg);
			$trgModal.find(".modal-footer").html(btns);
			
			$trgModal.modal('show');
	
			/*$(".wrapper > .messages").html(msg('done'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);*/
		},
		//	END SAVE MARKETING FORM
		
		//	BEGIN SAVE MARKETING FORM
		SAVE_WEBINAR_SETUP: function(){
			
			$trgModal = $("#confirmationModal");
			
			//	BEGIN TITLE, MESSAGE AND BUTTONS
			var title = '<i class="glyphicon glyphicon-info-sign"></i> <strong>IMPORTANT:</strong> Please Confirm';
			var msg = '<p>Please note that upon saving this selection a message will be sent to the 360training provider with the schedule and instructor information. You will <strong>NOT</strong> be able to change that information thereafter.</p> <p>Would you like to save this selection?</p>';
			var btns = '<button type="button" class="btn blue" data-dismiss="modal" onclick="window.open(\'webinar_setup_2.html\',\'_self\');">YES</button>'+
						'<button type="button" class="btn btn-default" data-dismiss="modal">NO</button>';
			//	END TITLE, MESSAGE AND BUTTONS
			
			$trgModal.find(".modal-title").html(title);
			$trgModal.find(".modal-body").html(msg);
			$trgModal.find(".modal-footer").html(btns);
			
			$trgModal.modal('show');
	
			/*$(".wrapper > .messages").html(msg('done'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);*/
		},
		//	END SAVE MARKETING FORM
		
		//	BEGIN SAVE PUBLISH FORM
		SAVE_PUBLISH: function(){
			
			$(".wrapper > .messages").html(msg('done'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
		},
		//	END SAVE PUBLISH FORM
		
		//	BEGIN SAVE OFFER FORM
		SAVE_OFFER: function(){
			
			$(".wrapper > .messages").html(msg('send'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
		},
		//	END SAVE OFFER FORM
		
		//	BEGIN DATE PICKER
		DATE_PICKER: function(ID){
			$(ID).datepicker();
		},
		//	END DATE PICKER
		
		//	BEGIN ACCORDION EVENT
		ACCORDION_EVENT: function(ID){
		
			$(ID).on('hidden.bs.collapse', function () {
			  //alert('CLOSE');
			  APP.MESSAGES_CLEAR();
			})
			
			$(ID).on('shown.bs.collapse', function () {
			  //alert('OPEN');
			  APP.MESSAGES_CLEAR();
			})
			
		},
		//	END ACCORDION EVENT
		
		//	BEGIN MODAL EVENT
		MODAL_EVENT: function(ID){
			
			$(ID).on('hidden.bs.modal', function (e) {
			  //alert('CLOSE');
			  APP.MESSAGES_CLEAR();
			})
			
			$(ID).on('show.bs.modal', function (e) {
			  //alert('OPEN');
			  APP.MESSAGES_CLEAR();
			})
			
		},
		//	END MODAL EVENT
		
		//	BEGIN PLACEHOLDER FIX CODE
		PLACEHOLDER_FIX: function(){
			var test = document.createElement('input');
				
			if (!('placeholder' in test))
			{
				$('input').each(function()
				{
				   if ($(this).attr('placeholder') != "" && this.value=="")
				   {
					   $(this).val($(this).attr('placeholder')).css('color', 'grey')
						  .on({
							  focus: function()
							  {
								  if (this.value==$(this).attr('placeholder'))
								  {
									$(this).val("").css('color', '#000');
								  }
							  },
							  blur: function()
							  {
								  if (this.value=="")
								  {
									$(this).val($(this).attr('placeholder'))
										.css('color', 'grey');
								  }
							  }
							});
				   }
				});
			}
		},
		//	END PLACEHOLDER FIX CODE
			
		//	BEGIN MESSAGES CLEAR
		MESSAGES_CLEAR: function(){
			$(".wrapper > .messages").html("");
		},
		//	END MESSAGES CLEAR
		
		//	BEGIN LOADER
		LOADING_BTN: function(ID){
			
			$(ID).click(function () {
				var btn = $(this);
				btn.button('loading');
			  });
		},
		//	END LOADER
		
		//	BEGIN LOADER
		LOADING_BTN_RESET: function(ID,RID){
			
			$(ID).click(function () {
				$(RID).button('reset');
			  });
			
		},
		//	END LOADER
		
		//	BEGIN LOADING BAR
		LOADING_BAR: function (){
		
			$(".ui-ios-overlay").remove();
			
			var opts = {
			  lines: 13, // The number of lines to draw
			  length: 6, // The length of each line
			  width: 5, // The line thickness
			  radius: 2, // The radius of the inner circle
			  corners: 0, // Corner roundness (0..1)
			  rotate: 0, // The rotation offset
			  direction: 1, // 1: clockwise, -1: counterclockwise
			  color: '#fff', // #rgb or #rrggbb or array of colors
			  speed: 1, // Rounds per second
			  trail: 60, // Afterglow percentage
			  shadow: false, // Whether to render a shadow
			  hwaccel: false, // Whether to use hardware acceleration
			  className: 'spinner', // The CSS class to assign to the spinner
			  zIndex: 2e9, // The z-index (defaults to 2000000000)
			  top: '50%', // Top position relative to parent
			  left: '50%' // Left position relative to parent
			};
			
			var target = document.getElementById('foo');
			var spinner = new Spinner(opts).spin(target);

			var overlay = iosOverlay({
				text: "Saving...",
				spinner: spinner
			});

			if(Math.round(Math.random()))
			{
				window.setTimeout(function() {
					overlay.update({
						icon: "assets/plugins/iosOverlay-js/img/check.png",
						text: "Success"
					});
				}, 3e3);
			}
			else
			{
				window.setTimeout(function() {
					overlay.update({
						icon: "assets/plugins/iosOverlay-js/img/cross.png",
						text: "Fail"
					});
				}, 3e3);
			}
			
			window.setTimeout(function() {
				overlay.hide();
			}, 5e3);
		},
		//	END LOADING BAR
		
		//	BEGIN LLO ADD OR DELETE
		LLO: function (trg,isAdd){
			
			$table = $(trg).parent().parent().parent().parent().parent();
			$allChecker = $table.find('thead');
			$allChecker = $allChecker.find('.checker');
			$table = $table.find('tbody');
			
			var strHTML = '<tr>'+
								'<td>'+
									'<input type="checkbox" class="checks" onclick="APP.CHECKBOX(this,false)"></input>'+
								'</td>'+
								'<td>'+
									'<input type="text" value="" placeholder="Enter learning objective name." class="form-control"></input>'+
								'</td>'+
						  '</tr>';
			
			if(isAdd)
			{
				//	ADD
				$table.append(strHTML);
				$allChecker.prop("checked",false);
			}
			else
			{
				APP.CACHE = [$table,$allChecker];
				$trgModal = $("#confirmationModal");
				
				//	BEGIN TITLE, MESSAGE AND BUTTONS
				var title = '<i class="glyphicon glyphicon-warning-sign"></i> Please Confirm';
				var msg = '<p>Are you sure you want to delete selected learning objective(s)?</p>';
				var btns = '<button type="button" class="btn blue" onclick="APP.LLO_CONFIRM_REMOVE(true)" data-dismiss="modal">YES</button>'+
							'<button type="button" class="btn btn-default" onclick="APP.LLO_CONFIRM_REMOVE(false)" data-dismiss="modal">NO</button>';
				//	END TITLE, MESSAGE AND BUTTONS
				
				$trgModal.find(".modal-title").html(title);
				$trgModal.find(".modal-body").html(msg);
				$trgModal.find(".modal-footer").html(btns);
				
				$trgModal.modal('show');
			}
		},
		//	END LLO ADD OR DELETE
		
		//	BEGIN LLO DELETE
		LLO_CONFIRM_REMOVE: function (confirm){
		
			if(confirm)
			{
				$table = APP.CACHE[0];
				
				//	DELETE
				$table.children().each(function(index,element){
					
					if($(element).find('.checks').prop('checked') == true)
					{
						$(element).remove();
					}
					
				});
				
				$(APP.CACHE[1]).prop("checked",false);
			}
			APP.CACHE = "";
		},
		//	END LLO DELETE
		
		//	BEGIN CHECKALL
		CHECKBOX: function (trg,isChecker){

			$table = $(trg).parent().parent().parent().parent();
			
			if(isChecker)
			{
				//	HEADER CHECKBOX CONTROL BODY CHECKBOXES
				$tbody = $table.find('tbody');
				
				$tbody.children().each(function(index, element){
					
					//	Update Body CheckBoxs
					$(element).find('.checks').prop('checked',trg.checked);
					
				});
			}
			else
			{
				
				//	BODY CHECKBOX CONTROL HEADER CHECKBOXES
				$tbody = $table.find('tbody');
				
				$allChecker = $table.find('thead');
				$allChecker = $allChecker.find('.checker');
				
				if(trg.checked)
				{
					$isCheckAll = true;
					
					$tbody.children().each(function(index, element){
						
						if($(element).find('.checks').prop('checked') == false)
						{
							$isCheckAll = false;
						}
						
					});
					
					$allChecker.prop('checked',$isCheckAll);
				}
				else
				{
					$allChecker.prop('checked',trg.checked);
				}
			}
		},
		//	END CHECKALL
		
		//	BEGIN CACHE
		CACHE: "",
		//	END CACHE
		
		//	BEGIN BAR CACHE
		CACHE_BAR: "",
		//	END BAR CACHE
		
		//	BEGIN MODE CHANGER
		MODE_CHANGE: function(trg){
			
			$(trg).addClass("active-mode");
			
			//	Last Mode
			if(APP.MODE_CACHE != "")
			{
				$(APP.MODE_CACHE).removeAttr("class");
			}
			
			$('.mode-label').html($(trg).text());

			/* BEGIN - NEED TO BE REFINE */
			$("#learner-portlet").css("display","none");
			$("#manager-portlet").css("display","none");			
			
			switch($(trg).attr('id'))
			{
				case "mgr_mode":
					$("#manager-portlet").css("display","block");
					break;
				
				case "lnr_mode":
					$("#learner-portlet").css("display","block");
					break;
				
			}
			/* END - NEED TO BE REFINE */
			
			APP.MODE_CACHE = trg;
		},
		//	END MODE CHANGER
		
		//	BEGIN INITAILIZE MODE
		MODE_INIT: function(ID){
			
			APP.MODE_CHANGE($(ID));
			
		},
		//	BEGIN INITAILIZE MODE
		
		//	BEGIN CACHE MODE
		MODE_CACHE: "",
		//	END CACHE MODE
		
		//	BEGIN TOOLTIP
		BOOTSTRAP_TOOLTIP:function(ID){
			$(ID).popover();
		},
		//	END TOOLTIP
		
		//	BEGIN TAG INPUT
		TAGS_INPUT: function(){
			$("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput();
		},
		//	END TAG INPUT
		
		//	BEGIN STEP INDICATOR
		STEPS_INDICATOR: {
			
			GL:0,
			POINTER:[".indicator"],
			INIT: function(obj)
			{
				var PL = APP.STEPS_INDICATOR.GL;
				var i = 0;
				var length = 0;
				APP.STEPS_INDICATOR.POINTER.push("ul");
				$.each(obj, function(){length++});
				$.each(obj, function(o)
				{
					if(i != 0)
					{
						APP.STEPS_INDICATOR.POINTER.pop();
					}
					APP.STEPS_INDICATOR.POINTER.push("li:eq('"+i+"')");
					var ref = APP.STEPS_INDICATOR.POINTER.join();
					ref = String(ref).replace(/,/gi," > ");
					$(ref).prepend('<img src="assets/img/icons/indicator-'+obj[o]._status+'.png" class="indicate" />');
					//console.log(length+" - "+PL+" - "+o);
					//console.log(ref);
					
					if(typeof obj[o]._children != "undefined")
					{
						APP.STEPS_INDICATOR.GL++;
						APP.STEPS_INDICATOR.INIT(obj[o]._children);
					}
					else
					{
						if(i == (length-1))
						{
							APP.STEPS_INDICATOR.POINTER.pop();
							APP.STEPS_INDICATOR.POINTER.pop();
							APP.STEPS_INDICATOR.GL--;
						}
					}
					i++;
				});
			}
			
		},
		//	END STEP INDICATOR
		
		//	BEGIN BOTTOM BAR
		BOTTOM_BAR: function(){
			$(window).scroll(function()
			{
				if ($(this).scrollTop() > 300)
				{
					$('body').addClass("gritter-save-body");
					$('#gritterSave').parent().parent().addClass("gritter-save");
				}
				else
				{
					$('body').removeClass("gritter-save-body");
					$('#gritterSave').parent().parent().removeClass("gritter-save");
				}
			});
		}
		//	END BOTTOM BAR
	}
}();

function msg(cases)
{
	var str = '';
	
	switch(cases){
	
		case "content":
			str += '<div class="alert alert-success alert-dismissible fade" role="alert">'+
					'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
					'<strong>Success!</strong> The content has been saved.'+
				  '</div>';
			break;
			
		case "overview":
			str += '<div class="alert alert-success alert-dismissible fade" role="alert">'+
					'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
					'<strong>Whoo Hoo! A new course!</strong> Complete each section in the left navigation panel to build your course and publish it.'+
				  '</div>';
			break;
		
		case "done":
			str += '<div class="alert alert-success alert-dismissible fade" role="alert">'+
					'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
					'<strong>Success!</strong> this section has been saved.'+
				  '</div>';
			break;
		
		case "send":
			str += '<div class="alert alert-success alert-dismissible fade" role="alert">'+
					'<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
					'<strong>Success!</strong> request has been submit.'+
				  '</div>';
			break;
	};
	
	return str;
}

function remove_panel(trg)
{
	APP.CACHE = trg;
	$trgModal = $("#confirmationModal");
	
	//	BEGIN TITLE, MESSAGE AND BUTTONS
	var title = '<i class="glyphicon glyphicon-warning-sign"></i> Please Confirm';
	var msg = '<p>Are you sure you want to remove this slide?</p>';
	var btns = '<button type="button" class="btn blue" onclick="confirm_remove(true)" data-dismiss="modal">YES</button>'+
				'<button type="button" class="btn btn-default" onclick="confirm_remove(false)" data-dismiss="modal">NO</button>';
	//	END TITLE, MESSAGE AND BUTTONS
	
	$trgModal.find(".modal-title").html(title);
	$trgModal.find(".modal-body").html(msg);
	$trgModal.find(".modal-footer").html(btns);
	
	$trgModal.modal('show');
}

function confirm_remove(confirm)
{
	if(confirm)
	{
		$bar = $(APP.CACHE).parent().parent().parent();
		$bar.animate({height: "0px"}, 500);
		window.setTimeout(function() {
			$bar.remove();
		}, 500);
	}
	APP.CACHE = "";
}

function accordion_btn_actions(ID)
{
	switch(ID)
	{
		case "nav_accordion_0":
			window.open('course_overview.html','_self');
			break;
		case "nav_accordion_1":
			window.open('course_structure.html','_self');
			break;
		case "nav_accordion_2":
			window.open('course_settings.html','_self');
			break;
			
		case "nav_accordion_0w":
			window.open('webinar_overview.html','_self');
			break;
		case "nav_accordion_2w":
			window.open('webinar_settings.html','_self');
			break;
			
		case "nav_accordion_0c":
			window.open('classroom_overview.html','_self');
			break;
		case "nav_accordion_2c":
			window.open('classroom_settings.html','_self');
			break;
	}
}

function toggle_leftNavPanel()
{
	//var trgElm = $("#leftNavPanel .list-holder");
	var trgElm = $("#leftNavPanel");
	
	if(trgElm.css('width') != '42px')
	{
		APP.LEFT_NAV.width = trgElm.css('width');
		trgElm.css('width','42px');
		$("#leftNavPanel .list-holder .list-group").addClass("only-icon-panel");
		//applyResizable(false);
	}
	else
	{
		trgElm.css('width',APP.LEFT_NAV.width);
		$("#leftNavPanel .list-holder .list-group").removeClass("only-icon-panel");
		//applyResizable(true);
	}
}

function leftNavCollapse(trg,thisTrg)
{
	if(trg.css("display") == 'none')
	{
		thisTrg.removeClass("open-sign");
		thisTrg.addClass("close-sign");
	}
	else
	{
		thisTrg.removeClass("close-sign");
		thisTrg.addClass("open-sign");
	}
	
	trg.toggle(250);
}

function applyResizable(condition)
{
	if(condition)
	{
		//$( "#leftNavPanel .list-holder" ).resizable({
		$( "#leftNavPanel" ).resizable({
			maxWidth: 500,
			minWidth: 200,
			handles: 'e'
		});
	}
	else
	{
		//$( "#leftNavPanel .list-holder" ).resizable('destroy');
		$( "#leftNavPanel" ).resizable('destroy');
	}
}

function analyseScreenWidth(trg)
{
	if($(window).width() < 391)
	{
		if(trg.css('width') != '42px')
		{
			toggle_leftNavPanel();
		}
	}
}