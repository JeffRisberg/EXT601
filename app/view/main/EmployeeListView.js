Ext.define('EXT601.view.main.EmployeeListView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.employeelistview',

    controller: 'employeelistview',

    iconCls: 'x-fa fa-users',
    store: {
        type: 'employees',
        autoLoad: true,
        sorters: ['firstName', 'lastName', 'officeLocation']
    },
    groupField: 'officeLocation',
    listeners: {
        rowclick: 'onPopupForm',
        scope: 'controller'
    },
    columns: [{
        text: 'First Name',
        dataIndex: 'firstName',
        flex: 1
    }, {
        text: 'Last Name',
        dataIndex: 'lastName',
        flex: 1
    }, {
        text: 'Phone Number',
        dataIndex: 'phoneNumber',
        flex: 1
    }]
});
