//	Plugin Source Code
CKEDITOR.plugins.add( 'abbr', {
    icons: 'abbr',
    init: function( editor ) {
        // Plugin logic goes here...
		
		//	Creating an Editor Command
		editor.addCommand( 'abbrDialog', new CKEDITOR.dialogCommand( 'abbrDialog' ) );

		//	Creating the Toolbar Button
		editor.ui.addButton( 'Abbr', {
			label: 'Insert link to support materials that you have already attached to the lesson.',
			command: 'abbrDialog',
			toolbar: 'others'
		});
		
		CKEDITOR.dialog.add( 'abbrDialog', this.path + 'dialogs/abbr.js' );
    }
});