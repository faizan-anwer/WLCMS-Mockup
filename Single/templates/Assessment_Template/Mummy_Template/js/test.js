// JavaScript Document
var AssessmentItemAnswers = {
		
		
	AssessmentItemAnswerGuid:"AssessmentItemAnswerGuid",


	AssessmentItemAnswerID:"AssessmentItemAnswerID",

	
	Label:"Correct",

	
	Value:"Value",

	
	IsCorrect:true,

	
	DisplayOrder:"DisplayOrder",

	
	Feedback:"Feedback",

	
	Correctfeedback:"Correctfeedback",

	
	Incorrectfeedback:"Incorrectfeedback",

	
	Usedefaultfeedbacktf:"Usedefaultfeedbacktf"

}

var AssessmentItemAnswers2 = {
		
		
	AssessmentItemAnswerGuid:"AssessmentItemAnswerGuid",


	AssessmentItemAnswerID:"AssessmentItemAnswerID",

	
	Label:"Label",

	
	Value:"Value",

	
	IsCorrect:false,

	
	DisplayOrder:"DisplayOrder",

	
	Feedback:"Feedback",

	
	Correctfeedback:"Correctfeedback",

	
	Incorrectfeedback:"Incorrectfeedback",

	
	Usedefaultfeedbacktf:"Usedefaultfeedbacktf"

}

var AssessmentItem = {
	
	
	AssessmentItemGuid:"AssessmentItemGuid",

	
	AssessmentItemID:"AssessmentItemID",

	
	AssessmentBinderID:"AssessmentBinderID",

	
	AssessmentBinderName:"AssessmentBinderName",

	
	QuestionStem:"<p>QuestionStem</p>",

	
	QuestionType:"QuestionType",

	
	Status:"Status",

	
	AssessmentAnswers:[AssessmentItemAnswers2,AssessmentItemAnswers2,AssessmentItemAnswers,AssessmentItemAnswers2],

	
	Feedback:"<p>Feedback</p>",

	
	Correctfeedback:"Correctfeedback",

	
	Incorrectfeedback:"Incorrectfeedback",

	
	Disablerandomizeanswerchoicetf:"Disablerandomizeanswerchoicetf",

	
	AssessmentItemTemplateType:"AssessmentItemTemplateType",

	
	Feedbacktype:"Feedbacktype",

	
	ScoreWeight:"ScoreWeight",
	
	
	TestID:"TestID"
}

var AssessmentItemBank = {
	AssessmentBankID: 0,
	AssessmentItems: [AssessmentItem,AssessmentItem,AssessmentItem]
};

function GetAssessmentItemsByAssessmentBankIDs(assessmentBankIDs){

	var BankArray = new Array();
	
	BankArray[0] = AssessmentItemBank;
	BankArray[1] = AssessmentItemBank;
	BankArray[2] = AssessmentItemBank;
	BankArray[3] = AssessmentItemBank;
	BankArray[4] = AssessmentItemBank;
	BankArray[5] = AssessmentItemBank;
	BankArray[6] = AssessmentItemBank;
	BankArray[7] = AssessmentItemBank;
	BankArray[8] = AssessmentItemBank;
	BankArray[9] = AssessmentItemBank;
	BankArray[10] = AssessmentItemBank;
	BankArray[11] = AssessmentItemBank;
	BankArray[12] = AssessmentItemBank;
	BankArray[13] = AssessmentItemBank;
	BankArray[14] = AssessmentItemBank;

	return BankArray;
}

function SaveAssessmentEndTrackingInfo_ForGameTemplate(assessmentType, noOfAnswersCorrect, noOfAnswersInCorrect, currentAttemptNo, weightedScore, isCurrentAssessmentPassed, masteryScore, assessmentTimeInSeconds, remediationCount){
	alert(assessmentType +" "+ noOfAnswersCorrect +" "+ noOfAnswersInCorrect +" "+ currentAttemptNo +" "+ weightedScore +" "+ isCurrentAssessmentPassed +" "+ masteryScore +" "+ assessmentTimeInSeconds +" "+ remediationCount);
}

xmlSampleData_ForCustomTemplate = '<?xml version="1.0" encoding="utf-8"?>'+
'<root>'+
	
	'<globalVars type="globalVariables" label="Global Variables">'+
		'<id type="InputText" label="ID">00000</id>'+
		'<subTitle type="InputText" label="Subtitle">Sub Title</subTitle>'+
	'</globalVars>'+

	'<funcToggles type="functionalityToggles" label="Functionality Toggles">'+
		'<canQaDemo type="CheckBox" label="QA Mode">true</canQaDemo>'+
		'<isTimed type="CheckBox" label="Timed Question">true</isTimed>'+
	'</funcToggles>'+

	'<reviewAndAnalyze type="reviewAndAnalyze" label="Review and Analyze Module Toggles">'+
		'<canAnalyze type="CheckBox" label="Analyze">true</canAnalyze>'+
		'<canReview type="CheckBox" label="Review">false</canReview>'+
	'</reviewAndAnalyze>'+
	
	'<policies type="Policies" label="Policies">'+
		'<type type="DropDown" label="Type" value="pre">'+
			'<list value="p">Practice Assessment</list>'+
			'<list value="pre">Pre Assessment</list>'+
			'<list value="post">Post Assessment</list>'+
			'<list value="quiz">Quizzes</list>'+
		'</type>'+
		'<mastery type="InputText" label="Mastery Level">40</mastery>'+
		'<maxAttempts type="InputText" label="Maximum Attempts">0</maxAttempts>'+
	'</policies>'+

	'<assessments type="Assessments" label="Assessments">'+
	
		'<topic type="TopicBank" label="Topic">'+
			'<list value="1">Group A</list>'+
			'<list value="2">Group B</list>'+
			'<list value="3">Group C</list>'+
		'</topic>'+
		
		'<itemBank type="ItemBank" label="Item Bank">'+
		
			<!--	SLOT 0	    -->
		
			'<slot type="ItemBank" label="Slot 0" id="0" bankId="00" topicId="1"/>'+
			
			<!--	SLOT 1	  -->
		
			'<slot type="ItemBank" label="Slot 1" id="1" bankId="10" topicId="1"/>'+
			
			<!--	SLOT 2	  -->
		
			'<slot type="ItemBank" label="Slot 2" id="2" bankId="20" topicId="1"/>'+			
			
			<!--	SLOT 3	  -->
		
			'<slot type="ItemBank" label="Slot 3" id="3" bankId="30" topicId="1"/>'+			
			
			<!--	SLOT 4	  -->
		
			'<slot type="ItemBank" label="Slot 4" id="4" bankId="40" topicId="1"/>'+			
			
			<!--	SLOT 5	  -->
		
			'<slot type="ItemBank" label="Slot 5" id="5" bankId="50" topicId="2"/>'+
			
			<!--	SLOT 6	  -->
		
			'<slot type="ItemBank" label="Slot 6" id="6" bankId="60" topicId="2"/>'+			
			
			<!--	SLOT 7	  -->
		
			'<slot type="ItemBank" label="Slot 7" id="7" bankId="70" topicId="2"/>'+			
			
			<!--	SLOT 8	  -->
		
			'<slot type="ItemBank" label="Slot 8" id="8" bankId="80" topicId="2"/>'+			
			
			<!--	SLOT 9	  -->
		
			'<slot type="ItemBank" label="Slot 9" id="9" bankId="90" topicId="2"/>'+
			
			<!--	SLOT 10	  -->
		
			'<slot type="ItemBank" label="Slot 10" id="10" bankId="100" topicId="3"/>'+			
			
			<!--	SLOT 11	  -->
		
			'<slot type="ItemBank" label="Slot 11" id="11" bankId="110" topicId="3"/>'+			
			
			<!--	SLOT 12	  -->
		
			'<slot type="ItemBank" label="Slot 12" id="12" bankId="120" topicId="3"/>'+
			
			<!--	SLOT 13	  -->
		
			'<slot type="ItemBank" label="Slot 13" id="13" bankId="130" topicId="3"/>'+
			
			<!--	SLOT 14	  -->
		
			'<slot type="ItemBank" label="Slot 14" id="14" bankId="140" topicId="3"/>'+
			
		'</itemBank>'+
	'</assessments>'+
'</root>';

xmlSampleData = xmlSampleData_ForCustomTemplate;

document.getElementById('txtXml').style.display = "block";
document.getElementById('btnGet').style.display = "block";
document.getElementById('btnSet').style.display = "block";