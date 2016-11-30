<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" indent="yes"/>
  
  <xsl:template match="/">
    <div class="FormWrapper form-horizontal">
	
	    <!-- BEGIN PORTLET -->
		<div class="portlet portlet-btn">
		  <div class="portlet-title" title="{root/instructionText/@label}">
			 <div class="caption">
				<h5><strong><xsl:value-of select="root/instructionText/@label"/></strong></h5>
			 </div>
			 <div class="tools">
				<i class="text-icon" id="slide_{root/@sid}_p1"></i>
				<a href="javascript:;" class="collapse"></a>
			 </div>
		  </div>
		  <div class="portlet-body">
			<div class="form-body">
			   <div class="form-group">
				  <div class="col-md-offset-2 col-md-8 errPrepend">
					<textarea id="insText_{root/@sid}" class="form-control" name="insText_{root/@sid}" rows="4"><xsl:value-of select="root/instructionText" disable-output-escaping="yes"/></textarea>
				  </div>
			   </div>
			</div>
		  </div>
		</div>
		<!-- END PORTLET -->
		
		<!-- BEGIN PORTLET -->
		<div class="portlet portlet-btn">
		  <div class="portlet-title" title="{root/promptAudio/@label}">
			<div class="caption">
				<h5><strong><xsl:value-of select="root/promptAudio/@label"/> </strong> - 1 asset</h5>
			</div>
			<div class="tools">
				<i class="audio-icon" id="slide_{root/@sid}_p2"></i>
				<a href="javascript:;" class="collapse"></a>
			</div>
		  </div>
		  <div class="portlet-body form">
			<div class="form-body">
			   <div class="form-group">
				  <div class="col-md-offset-2 col-md-8 errPrepend">
					<div class="table-scrollable">
						<table class="table table-str-border table-bordered">
						  <thead>
							<tr class="td-header">
							  <th colspan="4">
								<div class='btn-group'>
									<a class="btn btn-default find" href="javascript:;" title="Find Audio Asset and Attach to Slide" onclick="TEMPLATE.DYNAMIC_MODAL('Table',this,'SearchAudioAsset','audio','_p2')"><i class="glyphicon glyphicon-new-window"></i></a>
									<a class="btn btn-default upload" href="javascript:;" onclick="TEMPLATE.DYNAMIC_MODAL('Table',this,'UploadAudioAsset','audio','_p2')" title="Upload Audio Asset and Attach to Slide"><i class="icon-plus blue-text"></i></a>
									<a class="btn btn-default detach disabled" href="javascript:;" onclick="TEMPLATE.DELETE_ROW(this,'_p2',true)" title="Detach Asset"><i class="icon-minus red-text"></i></a>
								</div>
							  </th>
							</tr>
							<tr class="td-header-bottom-border">
							  <th style="width:70%">Asset Name</th>
							  <th style="width:15%">Version</th>
							  <th style="width:15%">Preview</th>
							</tr>
						  </thead>
						  <tbody class="promptAudio">
							<tr class="hide">
							  <td class="name"></td>
							  <td class="ver"></td>
							  <td class="path">
								<a class="btn blue-text" href="javascript:;" target="_blank"><i class="glyphicon glyphicon-play"></i></a>
							  </td>
						    </tr>
							<xsl:choose>
								<xsl:when test="root/promptAudio/@name != ''">
									<tr class="asset">
									  <td class="name"><xsl:value-of select="root/promptAudio/@name" /></td>
									  <td class="ver"><xsl:value-of select="root/promptAudio/@ver" /></td>
									  <td class="path">
										<a class="btn blue-text" href="{root/promptAudio}" target="_blank"><i class="glyphicon glyphicon-play"></i></a>
									  </td>
									</tr>
								</xsl:when>
							</xsl:choose>
						  </tbody>
						</table>
					</div>
				  </div>
			   </div>
			</div>
		  </div>
		</div>
		<!-- END PORTLET -->
		
		<!-- BEGIN PORTLET -->
		<div class="portlet portlet-btn">
		  <div class="portlet-title" title="{root/column/@label}">
			 <div class="caption">
				<h5><strong><xsl:value-of select="root/column/@label"/></strong></h5>
			 </div>
			 <div class="tools">
				<i class="text-icon" id="slide_{root/@sid}_p3"></i>
				<a href="javascript:;" class="collapse"></a>
			 </div>
		  </div>
		  <div class="portlet-body">
			<div class="form-body">
			   <xsl:variable name="count" select="count(root/column/list)"/>
			   <div class="form-group gray-text">
					<label class="col-md-2 control-label">Venn Background</label>
					<div class="col-md-8">
						<xsl:if test="$count = '2'">
							<input id="venn_bg_{root/@sid}" type="checkbox" disabled="disabled" class="form-chkbox" />
						</xsl:if>
						<xsl:if test="$count = 3">
							<xsl:if test="root/vennDiagram = 0">
								<input id="venn_bg_{root/@sid}" type="checkbox" class="form-chkbox" />
							</xsl:if>
							<xsl:if test="root/vennDiagram = 1">
								<input id="venn_bg_{root/@sid}" checked="checked" type="checkbox" class="form-chkbox" />
							</xsl:if>
						</xsl:if>
					</div>
			   </div>
			   <div class="form-group gray-text">
					<label class="col-md-2 control-label">Categories</label>
					<div class="col-md-8">
						<select class="form-control" onchange="TEMPLATE.DND_CAT_TEMPLATE.CHANGE_CATEGORY(this)">
							<xsl:if test="$count = '2'">
								<option value="2">Two</option>
								<option value="3">Three</option>
							</xsl:if>
							<xsl:if test="$count = 3">
								<option value="2">Two</option>
								<option value="3" selected="selected">Three</option>
							</xsl:if>
						</select>
					</div>
			   </div>
			   <div class="form-group gray-text">
					<label class="col-md-2 control-label"></label>
					<div class="col-md-8">
						
						<div class="errPrepend">
							
							<div class="table-scrollable">
								<table class="table table-str-border table-bordered">
								  <thead>
									<tr class="td-header">
									  <td class="text-center">
										Category Titles
									  </td>
									</tr>
								  </thead>
								  <tbody class="column">
									
									<xsl:for-each select="root/column/list">
									  <xsl:variable name="i" select="position()" />
									
									  <xsl:choose>
										<xsl:when test="$i = 1">
										  <tr class="hide">
											<td><input type="text" class="form-control cat-title" onblur="TEMPLATE.DND_CAT_TEMPLATE.POPULATE_LIST()" value="" placeholder="Enter category title."/></td>
										  </tr>
										</xsl:when>
									  </xsl:choose>
									
										<tr>
											<td><input type="text" class="form-control cat-title" onblur="TEMPLATE.DND_CAT_TEMPLATE.POPULATE_LIST()" value="{.}" placeholder="Enter category title." /></td>
										</tr>
									
									</xsl:for-each>
									
								  </tbody>
								</table>
							</div>
							
						</div>
						
					</div>
				  
			   </div>
			</div>
		  </div>
		</div>
		<!-- END PORTLET -->
		
		<!-- BEGIN PORTLET -->
		<div class="portlet portlet-btn">
		  <div class="portlet-title" title="{root/options/@label}">
			 <div class="caption">
				<h5><strong><xsl:value-of select="root/options/@label"/></strong></h5>
			 </div>
			 <div class="tools">
				<i class="text-icon" id="slide_{root/@sid}_p4"></i>
				<a href="javascript:;" class="collapse"></a>
			 </div>
		  </div>
		  <div class="portlet-body">
			<div role="alert" class="alert alert-warning">
				<i class="icon-warning-sign"></i><strong> Two</strong> categories, no more than 4 items can be dragged and <strong>three</strong> categories, no more than 3 items can be dragged to any given category. Please make adjustments as needed. Each row represents the draggable object. Click the Add Row button <span class="btn btn-default" disabled="disabled"><i class="icon-plus"></i></span> to add more rows.
			</div>
			<div class="form-body">
			   <div class="form-group">
					<div class="col-md-offset-2 col-md-8">
					  <div class="errPrepend_0"></div>
					  <div class="errPrepend">
						<div class="table-scrollable">
							<table class="table table-str-border table-bordered">
							  <thead>
								<tr class="td-header">
								  <th colspan="7">
									<div class='btn-group'>
										<a class="btn btn-default upload cond" href="javascript:;" title="Add item" onclick="TEMPLATE.DND_CAT_TEMPLATE.CREATE_ROW(this);"><i class="icon-plus blue-text"></i></a>
										<a class="btn btn-default detach disabled" onclick="TEMPLATE.DELETE_ROW(this,'_p4',false,9)" href="javascript:;" title="Delete item(s)"><i class="icon-minus red-text"></i></a>
									</div>
									<!-- <div class='btn-group' style="padding-left:10px">
										<a title="Move Up" class="btn btn-default" href="javascript:TEMPLATE.MOVE_ROW(true,'.options');"><i class="icon-move-up"></i></a>
										<a title="Move Down" class="btn btn-default" href="javascript:TEMPLATE.MOVE_ROW(false,'.options');"><i class="icon-move-down"></i></a>
									</div> -->
								  </th>
								</tr>
								<tr class="td-header-bottom-border">
								  <th style="width:1%"><input type="checkbox" onclick="TEMPLATE.CHECKBOX(this,true)" class="checker" /></th>
								  <th style="width:16.5%"><xsl:value-of select="root/options/option/draggableObject/@label"/></th>
								  <th style="width:16.5%"><xsl:value-of select="root/options/option/correctCategory/@label"/></th>
								  <th style="width:16.5%"><xsl:value-of select="root/options/option/correctFeedback/@label"/></th>
								  <th style="width:16.5%"><xsl:value-of select="root/options/option/correctFeedbackAudio/@label"/></th>
								  <th style="width:16.5%"><xsl:value-of select="root/options/option/incorrectFeedback/@label"/></th>
								  <th style="width:16.5%"><xsl:value-of select="root/options/option/incorrectFeedbackAudio/@label"/></th>
								</tr>
							  </thead>
							  <tbody class="options">
								
								<xsl:for-each select="root/options/option">
								  <xsl:variable name="i" select="position()" />
								
								  <xsl:choose>
									<xsl:when test="$i = 1">
									  <tr class="hide">
										<td><input type="checkbox" onclick="TEMPLATE.CHECKBOX(this,false)" class="checks" /></td>
										<td class="edit-area draggableObject" data-modal-title="{draggableObject/@label}" onclick="TEMPLATE.TEXT_MODAL(this)">
											<div class="content">
												
											</div>
										</td>
										<td class="correctCategory">
											<select class="form-control" onfocus="TEMPLATE.DND_CAT_TEMPLATE.CHECK_CATEGORY(this)">
												<option value="0">--Select--</option>
												<xsl:for-each select="../../column/list">
													<option value="{@value}"><xsl:value-of select="(.)" disable-output-escaping="yes"/></option>
												</xsl:for-each>
											</select>
										</td>
										<td class="edit-area correctFeedback" data-modal-title="{correctFeedback/@label}" onclick="TEMPLATE.TEXT_MODAL(this)">
											<div class="content">
												
											</div>
										</td>
										<td class="edit-area correctFeedbackAudio" data-modal-title="{correctFeedbackAudio/@label}" onclick="TEMPLATE.DYNAMIC_MODAL('Cell',this,'MultiPanelAsset','audio')">
											<div class="content">
												<div class="asset">
												  <span class="name"></span>
												  <span class="ver hide"></span>
												  <span class="path hide">
													<a href="." target="_blank"></a>
												  </span>
												</div>
											</div>
										</td>
										<td class="edit-area incorrectFeedback" data-modal-title="{incorrectFeedback/@label}" onclick="TEMPLATE.TEXT_MODAL(this)">
											<div class="content">
												
											</div>
										</td>
										<td class="edit-area incorrectFeedbackAudio" data-modal-title="{incorrectFeedbackAudio/@label}" onclick="TEMPLATE.DYNAMIC_MODAL('Cell',this,'MultiPanelAsset','audio')">
											<div class="content">
												<div class="asset">
												  <span class="name"></span>
												  <span class="ver hide"></span>
												  <span class="path hide">
													<a href="." target="_blank"></a>
												  </span>
												</div>
											</div>
										</td>
									  </tr>
									</xsl:when>
								  </xsl:choose>
								
								  <xsl:choose>
									<xsl:when test="draggableObject != ''">
										<tr>
											<td><input type="checkbox" onclick="TEMPLATE.CHECKBOX(this,false)" class="checks" /></td>
											<td class="edit-area draggableObject" data-modal-title="{draggableObject/@label}" onclick="TEMPLATE.TEXT_MODAL(this)">
												<div class="content">
													<xsl:value-of select="string(draggableObject)" disable-output-escaping="yes"/>
												</div>
											</td>
											<td class="correctCategory">
												<xsl:variable name="cTLId" select="correctCategory/@columnListId"/>
												<select class="form-control" onfocus="TEMPLATE.DND_CAT_TEMPLATE.CHECK_CATEGORY(this)">
													<option value="0">--Select--</option>
													<xsl:for-each select="../../column/list">
														<xsl:choose>
															<xsl:when test="@value = $cTLId">
																<option value="{@value}" selected="selected"><xsl:value-of select="."/></option>
															</xsl:when>
															<xsl:otherwise>
																<option value="{@value}"><xsl:value-of select="."/></option>
															</xsl:otherwise>
														</xsl:choose>
													</xsl:for-each>
												</select>
											</td>
											<td class="edit-area correctFeedback" data-modal-title="{correctFeedback/@label}" onclick="TEMPLATE.TEXT_MODAL(this)">
												<div class="content">
													<xsl:value-of select="correctFeedback" disable-output-escaping="yes"/>
												</div>
											</td>
											<td class="edit-area correctFeedbackAudio" data-modal-title="{correctFeedbackAudio/@label}" onclick="TEMPLATE.DYNAMIC_MODAL('Cell',this,'MultiPanelAsset','audio')">
												<div class="content">
													<div class="asset">
													  <span class="name"><xsl:value-of select="correctFeedbackAudio/@name" /></span>
													  <span class="ver hide"><xsl:value-of select="correctFeedbackAudio/@ver" /></span>
													  <span class="path hide">
														<a href="{correctFeedbackAudio}" target="_blank"></a>
													  </span>
													</div>
												</div>
											</td>
											<td class="edit-area incorrectFeedback" data-modal-title="{incorrectFeedback/@label}" onclick="TEMPLATE.TEXT_MODAL(this)">
												<div class="content">
													<xsl:value-of select="incorrectFeedback" disable-output-escaping="yes"/>
												</div>
											</td>
											<td class="edit-area incorrectFeedbackAudio" data-modal-title="{incorrectFeedbackAudio/@label}" onclick="TEMPLATE.DYNAMIC_MODAL('Cell',this,'MultiPanelAsset','audio')">
												<div class="content">
													<div class="asset">
													  <span class="name"><xsl:value-of select="incorrectFeedbackAudio/@name" /></span>
													  <span class="ver hide"><xsl:value-of select="incorrectFeedbackAudio/@ver" /></span>
													  <span class="path hide">
														<a href="{incorrectFeedbackAudio}" target="_blank"></a>
													  </span>
													</div>
												</div>
											</td>
										</tr>
									</xsl:when>
								  </xsl:choose>
									
									
								</xsl:for-each>
								
							  </tbody>
							</table>
						</div>
					  </div>
					</div>
			   </div>
			</div>
		  </div>
		</div>
		<!-- END PORTLET -->
		
    </div>
  </xsl:template>
</xsl:stylesheet>