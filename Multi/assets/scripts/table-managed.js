var TableManaged = function () {

    return {
		
		moveable: function (tableId) {
		
		    if (!jQuery().dataTable) {
                return;
            }
			$(tableId).find(".move-up,.move-down").click(function(){
				var row = $(this).parents("tr:first");
				if ($(this).is(".move-up")) {
					row.insertBefore(row.prev());
				} else {
					row.insertAfter(row.next());
				}
			});
		},
		
        //main function to initiate the module
        init: function (tableId,searchable,sortable,addOrDelete) {
           
            if (!jQuery().dataTable) {
                return;
            }

            // begin first table
            $(tableId).dataTable({
				"searching": searchable,
				"ordering": sortable,
                "aLengthMenu": [
                    [5, 20, 30, -1],
                    [5, 20, 30, "All"] // change per page values here
                ],
                // set the initial value
                "iDisplayLength": 5,
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "Show _MENU_",
                    "oPaginate": {
                        "sPrevious": "Prev",
                        "sNext": "Next"
                    }
                }
            });
			
            /*jQuery('#sample_1 .group-checkable').change(function () {
                var set = jQuery(this).attr("data-set");
                var checked = jQuery(this).is(":checked");
                jQuery(set).each(function () {
                    if (checked) {
                        $(this).attr("checked", true);
                    } else {
                        $(this).attr("checked", false);
                    }
                    $(this).parents('tr').toggleClass("active");
                });
                jQuery.uniform.update(set);

            });

            jQuery('#sample_1 tbody tr .checkboxes').change(function(){
                 $(this).parents('tr').toggleClass("active");
            });*/
			
			if(addOrDelete){
				$(tableId+'_wrapper .table-tools-bar').append('<div class="btn-group pull-right"><a class="btn btn-default" href="javascript:table_minus_plus(\'PLUS\');" title="Add Lesson"><i class="icon-plus blue-text"></i></a><a class="btn btn-default" href="javascript:table_minus_plus(\'MINUS\');" title="Delele Lesson"><i class="icon-minus red-text"></i></a></div>');
			}
			
			jQuery(tableId+'_wrapper .dataTables_filter input').addClass("form-control-search"); // modify table search input
            jQuery(tableId+'_wrapper .dataTables_length select').addClass("form-control"); // modify table per page dropdown
            //jQuery('#sample_1_wrapper .dataTables_filter input').addClass("form-control"); // modify table search input
            //jQuery('#sample_1_wrapper .dataTables_length select').select2(); // initialize select2 dropdown
        }

    };

}();