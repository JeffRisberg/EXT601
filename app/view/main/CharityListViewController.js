/**
 * A ViewController for the charity list which popups the form.
 */
Ext.define('QuickStart.view.main.CharityListViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.charitylistview',

    onPopupForm: function (grid, record, element, rowIndex) {

        console.log("popping up charity form");
        console.log(record);
    }
});
