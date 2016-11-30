
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

			$(".wrapper > .messages").html(msg('content'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
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
		SAVE_MARKETING: function(){
			
			$(".wrapper > .messages").html(msg('done'));
			
			window.setTimeout(function() {
				$(".alert").addClass('in');
			}, 100);
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
			})
			
			$(ID).on('shown.bs.collapse', function () {
				//alert('OPEN');
			})
			
		},
		//	END ACCORDION EVENT
		
		//	BEGIN PARALLAX
		PARALLAX: function(){
			skrollr.init({forceHeight: false});
		},
		//	END PARALLAX
		
		//	BEGIN PRELOAD
		PRELOAD: function(){
			
			//FadeIn all sections
			$body = $('.loading');
			
			$body.imagesLoaded( function() {
				setTimeout(function() {
					  
					  // Initail
					  APP.PARALLAX();
					  
					  // Fade in sections
					  $body.removeClass('loading').addClass('loaded');
					  
				}, 800);
			});
		},
		//	END PRELOAD
		
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
		
		//	BEGIN RESPONSIVE DATA
		RESPONSIVE_DATA: function(ID,Width){
			
			//	Call on Load
			checkElementWidth($(ID),Width);
			
			//	Call on Resize
			$(window).resize(function ()
			{
				checkElementWidth($(ID),Width);
			});
		},
		//	END RESPONSIVE DATA
		
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
		MODE_CACHE: ""
		//	END CACHE MODE
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
	if(confirm("Are you sure?"))
	{
		$(trg).parent().parent().parent().remove();
	}
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
		case "course_welcome":
			//window.open('course_welcome.html','_self');
			break;
	}
}

function toggle_leftNavPanel()
{
	var trgElm = $("#leftNavPanel");
	
	if(trgElm.css('width') != '42px')
	{
		APP.LEFT_NAV.width = trgElm.css('width');
		trgElm.css('width','42px');
		$("#leftNavPanel .list-holder .list-group").addClass("only-icon-panel");
	}
	else
	{
		trgElm.css('width',APP.LEFT_NAV.width);
		$("#leftNavPanel .list-holder .list-group").removeClass("only-icon-panel");
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
		$( "#leftNavPanel" ).resizable({
			maxWidth: 500,
			minWidth: 200,
			handles: 'e'
		});
	}
	else
	{
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

function jumpUpAnotherSlide(_elm,_pos)
{
	//	Set Anchor State
	var $_circle_btn = $(_elm).parent().parent().find(".slide-btn");
	var $_list = $_circle_btn.parent().find(".list");
	var $_w = $_list.parent().width();
	var $_id = 1;
	var $_length = 0;
	
	$_circle_btn.children().each(function(i,elm)
	{
		var $_trg = $(elm);
		if(typeof $_trg.attr("class") != 'undefined')
		{
			$_id = i+_pos;
			$_trg.removeAttr("class");
		}
		$_length++;
	});
	
	if($_id < 0)
	{
		$_id = $_length-1;
	}else if($_id >= $_length)
	{
		$_id = 0;
	}
	
	var $_trg_btn = $($_circle_btn.children().get($_id));
	$_trg_btn.addClass("active");
	
	//	Slide
	$_list.animate(
	{
		right: (($_id+1) * $_w) - ($_w)
	});
}

function clickCircleBtn(_elm,id)
{
	//	Set Anchor State
	$(_elm).parent().children().each(function(i,elm)
	{
		$(elm).removeAttr("class");
	});
	$(_elm).addClass("active");
	
	//	Slide List
	var $_list = $(_elm).parent().parent().find(".list");
	var $_w = $_list.parent().width();
	
	$_list.animate(
	{
		right: (id * $_w) - ($_w)
	});
}

function checkElementWidth(_elm, _limit)
{
	var listElm = _elm.find(".list");
	var ulElm = listElm.find("ul");
	var $slideBtn = _elm.find(".slide-btn");
	var _width = _elm.width();
	
	//	For Small Screen
	if(_width < _limit)
	{
		//	Set Width
		listElm.width(_width * ulElm.children().length);
		
		//	Set UL Width
		ulElm.width(_width);
		
		if(typeof ulElm.attr("class") == "undefined")
		{	
			//	Marked UL
			ulElm.addClass("compress");
			
			//	Expose Corner Buttons
			_elm.find(".corner-btn").addClass("expose");
			
			//	Expose Slide Button Bar
			$slideBtn.addClass("expose");
		}
		else
		{
			var $_id = 0;
			
			//	Adjust List Position
			$slideBtn.children().each(function(i,elm)
			{
				if(typeof $(elm).attr('class') != 'undefined')
				{
					$_id = i;
				}
			});
			
			//	Reset List Position
			listElm.css('right',((_width)*$_id)+"px");
		}
	}
	//	For Medium or Large Screens
	else
	{
		if(typeof ulElm.attr("class") != "undefined")
		{
			//	Remove Width from List
			listElm.removeAttr("style");
			
			//	Remove Markers from UL
			ulElm.removeAttr("style");
			ulElm.removeAttr("class");
			
			//	Remove Corner Buttons
			_elm.find(".corner-btn").removeClass("expose");
			
			//	Remove Slide Button Bar
			_elm.find(".slide-btn").removeClass("expose");
		}
	}
}