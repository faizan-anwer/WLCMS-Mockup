
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
		
			//jQuery('body').on('click', '.portlet > .portlet-btn', function (e) {
			jQuery('body').on('click', '.portlet-btn > .portlet-title', function (e) {
				e.preventDefault();
				var el = jQuery(this).parent().find(".portlet-body");
				//var el = jQuery(this).find(".portlet-body");
				
				if (jQuery(this).find(".tools > a").hasClass("collapse")) {
				//if (jQuery(this).find(".portlet-title > .tools > a").hasClass("collapse")) {
					jQuery(this).find(".tools > a").removeClass("collapse").addClass("expand");
					//jQuery(this).find(".portlet-title > .tools > a").removeClass("collapse").addClass("expand");
					el.slideUp(200);
				} else {
					jQuery(this).find(".tools > a").removeClass("expand").addClass("collapse");
					//jQuery(this).find(".portlet-title > .tools > a").removeClass("expand").addClass("collapse");
					el.slideDown(200);
				}
			});
			
			if(STATE == "CLOSE")
			{
				//jQuery('.portlet > .portlet-btn > .tools > a').removeClass("collapse").addClass("expand");
				//jQuery('.portlet > .portlet-body').css('display','none');
				
				jQuery('.portlet-btn > .portlet-title > .tools > a').removeClass("collapse").addClass("expand");
				jQuery('.portlet-btn > .portlet-body').css('display','none');
			}
		},
		//	END PORTLET COLLAPSE
		
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
			
			//	Specific Configurations
			switch(toolbar){
				case "TITLE":
					CKEDITOR.replace(TxtID, CK_CONFIG.TITLE);
					break;
				
				case "CC":
					CKEDITOR.replace(TxtID, CK_CONFIG.CC);
					break;
					
				case "TEXT":
					CKEDITOR.replace(TxtID, CK_CONFIG.TEXT);
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
		}
		//	END DATAGRID
	}
}();

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
		case "course_welcome":
			//window.open('course_welcome.html','_self');
			break;
	}
}

function toggle_leftNavPanel()
{
	var trgElm = $("#leftNavPanel .list-holder");
	
	if(trgElm.css('width') != '42px')
	{
		APP.LEFT_NAV.width = trgElm.css('width');
		trgElm.css('width','42px');
		$("#leftNavPanel .list-holder .list-group").addClass("only-icon-panel");
		applyResizable(false);
	}
	else
	{
		trgElm.css('width',APP.LEFT_NAV.width);
		$("#leftNavPanel .list-holder .list-group").removeClass("only-icon-panel");
		applyResizable(true);
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
		$( "#leftNavPanel .list-holder" ).resizable({
			maxWidth: 500,
			minWidth: 200,
			handles: 'e'
		});
	}
	else
	{
		$( "#leftNavPanel .list-holder" ).resizable('destroy');
	}
}