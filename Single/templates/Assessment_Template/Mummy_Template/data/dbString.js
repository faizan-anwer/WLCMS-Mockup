// JavaScript Document
var xmlSampleData = '<?xml version="1.0" encoding="utf-8"?>'+
'<root>'+
	
	'<globalVars type="globalVariables" label="Global Variables">'+
		'<id type="InputText" label="ID"></id>'+
		'<subTitle type="InputText" label="Subtitle"></subTitle>'+
	'</globalVars>'+

	'<funcToggles type="functionalityToggles" label="Functionality Toggles">'+
		'<canQaDemo type="CheckBox" label="QA Mode">false</canQaDemo>'+
		'<isTimed type="CheckBox" label="Timed Question">false</isTimed>'+
	'</funcToggles>'+

	'<reviewAndAnalyze type="reviewAndAnalyze" label="Review and Analyze Module Toggles">'+
		'<canAnalyze type="CheckBox" label="Analyze">false</canAnalyze>'+
		'<canReview type="CheckBox" label="Review">false</canReview>'+
	'</reviewAndAnalyze>'+
	
	'<policies type="Policies" label="Policies">'+
		'<type type="DropDown" label="Type" value="p">'+
			'<list value="p">Practice Assessment</list>'+
			'<list value="pre">Pre Assessment</list>'+
			'<list value="post">Post Assessment</list>'+
			'<list value="quiz">Quizzes</list>'+
		'</type>'+
		'<mastery type="InputText" label="Mastery Level"></mastery>'+
		'<maxAttempts type="InputText" label="Maximum Attempts">0</maxAttempts>'+
	'</policies>'+

	'<assessments type="Assessments" label="Assessments">'+
	
		'<topic type="TopicBank" label="Topic(s)">'+
			'<list value="1">Topic Title</list>'+
		'</topic>'+
		
		'<itemBank type="ItemBank" label="Item Bank(s)">'+
		
			<!--	SLOT 0	    -->
		
			'<slot type="ItemBank" label="" id="0" bankId="00" topicId="1"/>'+
			
			<!--	SLOT 1	  -->
		
			'<slot type="ItemBank" label="" id="1" bankId="00" topicId="1"/>'+
			
			<!--	SLOT 2	  -->
		
			'<slot type="ItemBank" label="" id="2" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 3	  -->
		
			'<slot type="ItemBank" label="" id="3" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 4	  -->
		
			'<slot type="ItemBank" label="" id="4" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 5	  -->
		
			'<slot type="ItemBank" label="" id="5" bankId="00" topicId="1"/>'+
			
			<!--	SLOT 6	  -->
		
			'<slot type="ItemBank" label="" id="6" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 7	  -->
		
			'<slot type="ItemBank" label="" id="7" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 8	  -->
		
			'<slot type="ItemBank" label="" id="8" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 9	  -->
		
			'<slot type="ItemBank" label="" id="9" bankId="00" topicId="1"/>'+
			
			<!--	SLOT 10	  -->
		
			'<slot type="ItemBank" label="" id="10" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 11	  -->
		
			'<slot type="ItemBank" label="" id="11" bankId="00" topicId="1"/>'+			
			
			<!--	SLOT 12	  -->
		
			'<slot type="ItemBank" label="" id="12" bankId="00" topicId="1"/>'+
			
			<!--	SLOT 13	  -->
		
			'<slot type="ItemBank" label="" id="13" bankId="00" topicId="1"/>'+
			
			<!--	SLOT 14	  -->
		
			'<slot type="ItemBank" label="" id="14" bankId="00" topicId="1"/>'+
			
		'</itemBank>'+
	'</assessments>'+
'</root>'

var xmlSampleData_ForCustomTemplate;