<?xml version="1.0" encoding="utf-8"?>
<!-- DWXMLSource="mummy.xml" -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" doctype-public="-//WAPFORUM//DTD XHTML Mobile 1.0//EN" doctype-system="http://www.wapforum.org/DTD/xhtml-mobile10.dtd"/>
  <xsl:template match="/">
    <div class="FormWrapper">
      <div class="Panel">
        <div class="PanelHeader"><xsl:value-of select="root/globalVars/@label"/></div>
        <div class="PanelText">
          <div class="validationMsg"></div>
          <div class="leftFloat">
            <table>
                <tr>
                    <td><span class="red">* </span><label><xsl:value-of select="root/globalVars/id/@label"/></label></td>
                    <td><input type="text" id="gameId" class="inputTextField" value="{root/globalVars/id}" onkeydown="DetectKeyDown(event)"/></td>
                </tr>
                <tr>
                    <td><span class="red">* </span><label><xsl:value-of select="root/globalVars/subTitle/@label"/></label></td>
                    <td><input type="text" id="subTitle" class="inputTextField" value="{root/globalVars/subTitle}" onkeyup="specialCharacter(this)" onkeydown="DetectKeyDown(event)"/></td>
                </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="Panel">
        <div class="PanelHeader"><xsl:value-of select="root/funcToggles/@label"/></div>
        <div class="PanelText">
          <div class="validationMsg"></div>
          <div class="leftFloat">
            <table>
                <tr>
                    <td>
	                    <xsl:choose>
                            <xsl:when test="root/funcToggles/canQaDemo = 'true'">
                            	<input type="checkbox" id="canQaDemo" class="inputCheckbox" checked="checked" onclick="FormModified()"/>
                            </xsl:when>
                            <xsl:otherwise>
                            	<input type="checkbox" id="canQaDemo" class="inputCheckbox" onclick="FormModified()"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </td>
                    <td>
                    	<label><xsl:value-of select="root/funcToggles/canQaDemo/@label"/></label>
                    </td>
                </tr>
                <tr>
                    <td>
                    	<xsl:choose>
                        	<xsl:when test="root/funcToggles/isTimed = 'true'">
    	                        <input type="checkbox" id="isTimed" class="inputCheckbox" checked="checked" onclick="FormModified()"/>
                            </xsl:when>
                            <xsl:otherwise>
	                            <input type="checkbox" id="isTimed" class="inputCheckbox" onclick="FormModified()"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </td>
                    <td>
                    	<label><xsl:value-of select="root/funcToggles/isTimed/@label"/></label>
                    </td>
                </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="Panel">
        <div class="PanelHeader"><xsl:value-of select="root/reviewAndAnalyze/@label"/></div>
        <div class="PanelText">
          <div class="validationMsg"></div>
          <div class="leftFloat">
            <table>
                <tr>
                    <td>
	                    <xsl:choose>
                            <xsl:when test="root/reviewAndAnalyze/canAnalyze = 'true'">
                            	<input type="checkbox" id="canAnalyze" class="inputCheckbox" checked="checked" onclick="FormModified()"/>
                            </xsl:when>
                            <xsl:otherwise>
                            	<input type="checkbox" id="canAnalyze" class="inputCheckbox" onclick="FormModified()"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </td>
                    <td>
                    	<label><xsl:value-of select="root/reviewAndAnalyze/canAnalyze/@label"/></label>
                        <label class="instructionText"> (Allow learners to see their performance per topic)</label>
                    </td>
                </tr>
                <tr style="display:none">
                    <td>
                    	<xsl:choose>
                        	<xsl:when test="root/reviewAndAnalyze/canReview = 'true'">
    	                        <input type="checkbox" id="canReview" class="inputCheckbox" checked="checked" onclick="FormModified()"/>
                            </xsl:when>
                            <xsl:otherwise>
	                            <input type="checkbox" id="canReview" class="inputCheckbox" onclick="FormModified()"/>
                            </xsl:otherwise>
                        </xsl:choose>
                    </td>
                    <td>
                    	<label><xsl:value-of select="root/reviewAndAnalyze/canReview/@label"/></label>
                        <label class="instructionText"> (Allow learners to see questions and answers)</label>
                    </td>
                </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="Panel">
        <div class="PanelHeader"><xsl:value-of select="root/policies/@label"/></div>
        <div class="PanelText">
          <div class="validationMsg"></div>
          <div class="leftFloat">
            <table>
                <tr>
                    <td><span class="red">* </span><label><xsl:value-of select="root/policies/mastery/@label"/></label></td>
                    <td><input type="text" id="mastery" maxlength="3" class="inputNumberField" value="{root/policies/mastery}" onkeyup="textRestricted(this)" onkeydown="DetectKeyDown(event)"/> %</td>
                </tr>
                <tr style="display:none">
                    <td><label><xsl:value-of select="root/policies/maxAttempts/@label"/></label></td>
                    <td><input type="text" id="maxAttempts" class="inputTextField" value="{root/policies/maxAttempts}" onkeydown="FormModified()"/></td>
                </tr>
                <tr>
                    <td><label><xsl:value-of select="root/policies/type/@label"/></label></td>
                    <td>
                        <select name="type" id="type" onchange="FormModified()">
                          <xsl:for-each select="root/policies/type/list">
                            <xsl:choose>
                              <xsl:when test="@value = ../@value">
                                <option value="{@value}" selected="selected"><xsl:value-of select="." /></option>
                              </xsl:when>
                              <xsl:otherwise>
                                 <option value="{@value}"><xsl:value-of select="." /></option>
                              </xsl:otherwise>
                            </xsl:choose>
                          </xsl:for-each>
                        </select>
                  </td>
                </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="Panel">
        <div class="PanelHeader"><xsl:value-of select="root/assessments/@label"/></div>
        <div class="PanelText">
          <div class="validationMsg"></div>
                <div class="tableHeaderBtn">
                    <input type="button" onclick="deleteRow('topicTbl');" class="addRow" title="Delete Topic"/>
                    <input type="button" onclick="addRow('topicTbl');" class="deleteRow" title="Add Topic"/>
                </div>
          		<label class="instructionText"><br />Click a Add Topic button ( <img src="UI/formUI/greenBtnIcon.jpg" alt="" /> ) to add a topic.</label>
           		<table id="topicTbl" class="gridTable" cellspacing="1">
                	<tr>
                    	<td class="gridSNoHeaderCell">
                        	<input name="checkAll" id="checkAll" type="checkbox" onclick="checkAll(this)"/>
                        </td>
                        <td class="gridHeaderCell"><xsl:value-of select="root/assessments/topic/@label"/></td>
                    </tr>
                    <tr style="display:none">
                        <td class="gridSNoCell"><input name="option" id="option0" type="checkbox"/></td>
                        <td class="gridCell">
                        	<input name="topicLabel" id="topicLabel_0" type="text" class="topicLableInput" onchange="changeTopicTitle(this)" onfocus="focusTopicTitle(this)" onblur="blurTopicTitle(this)" value="" onkeydown="DetectKeyDown(event)"/>
                        </td>
                    </tr>
                     <xsl:for-each select="root/assessments/topic/list">
                        <tr>
                            <td class="gridSNoCell"><input name="option" id="option{@value}" type="checkbox"/></td>
                            <td class="gridCell">
                                <input name="topicLabel" id="topicLabel_{@value}" type="text" class="topicLableInput" onfocus="focusTopicTitle(this)" onblur="blurTopicTitle(this)" value="{.}" onchange="changeTopicTitle(this)" onkeydown="DetectKeyDown(event)"/> <!--  -->
                            </td>
                        </tr>
                     </xsl:for-each>
                </table>
                
          		<label class="instructionText"><br />Click a search button ( <img src="UI/formUI/searchBtnIcon.jpg" alt="" /> ) to assign an item bank. Each row requires its own item bank. The name of the item bank will be the name displayed in the game for the topic.</label>
          		<table id="slotTbl" class="gridTable" cellspacing="1">
                     <tr>
                        <td class="gridSNoHeaderCell">Slot#</td>
                        <td colspan="3" class="gridHeaderCell"><xsl:value-of select="root/assessments/itemBank/@label"/></td>
                        <td class="gridHeaderCell" width="300px"><xsl:value-of select="root/assessments/topic/@label"/></td>
                     </tr>
                     <xsl:for-each select="root/assessments/itemBank/slot">
                        <tr>
                            <td class="gridSNoCell"><xsl:value-of select="@id+1"/></td>
                            <td class="gridCell" width="75%"><span><img src="UI/formUI/bankIcon.jpg" alt=""/></span><input type="text" class="bankName" name="bankName" id="bank{@id}Name" value="{@label}" readonly="readonly" /><!---->
                            </td>
                            <td class="gridCell"><input class="searchBtn" name="searchBtn" type="button" id="{@id}" onclick="openAssessmentPopup(this, 'bank');" title="Search Assessment Items Bank"/></td>
                            <td><input class="bankId" name="bankId" id="bank{@id}Name_Id" type="text" value="{@bankId}" readonly="readonly" style="display:none"/></td>
                            <td class="gridCell">
                            	<div class="selectList">
	                                <select class="topicSelect" id="topicSelect{@id+1}" onchange="FormModified()">
                                        <xsl:variable name="tId" select="@topicId"/>
                                        <xsl:for-each select="../../topic/list">
                                        	<xsl:choose>
                                            	<xsl:when test="@value = $tId">
                                                	<option value="{@value}" selected="selected"><xsl:value-of select="."/></option>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                	<option value="{@value}"><xsl:value-of select="."/></option>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </xsl:for-each>
                                   	</select>
                              </div>
                            </td>
                        </tr>
                     </xsl:for-each>
                </table>
       </div>
      </div>
    </div>
  </xsl:template>
</xsl:stylesheet>