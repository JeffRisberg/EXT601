/**
 * A ViewController for the employee list which popups the form.
 */
Ext.define('QuickStart.view.main.EmployeeListViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.employeelistview',

    onPopupForm: function (grid, record, element, rowIndex) {

        var window = Ext.create('Ext.window.Window', {
            title: 'Update Employee',
            width: 400,
            centered: true,
            modal: true,
            items: [{
                xtype: 'popupform',
                record: record,
                viewModel: {
                    data: {
                        employee: record
                    }
                }
            }]
        });
        window.show();
    }
});
