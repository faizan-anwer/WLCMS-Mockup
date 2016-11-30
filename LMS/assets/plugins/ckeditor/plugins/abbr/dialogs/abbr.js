CKEDITOR.dialog.add( 'abbrDialog', function ( editor ) {
    return {
        title: 'Course Material',
        minWidth: 400,
        minHeight: 200,

        contents: [
            {
                id: 'tab-basic',
                label: '',
                elements: [
                    // UI elements of the first tab will be defined here
                ]
            }
        ]
    };
});