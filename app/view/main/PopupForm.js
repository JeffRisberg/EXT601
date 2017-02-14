/**
 * A form that displays employee information
 */
Ext.define('QuickStart.view.main.PopupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'popupform',
    controller: 'popupform',

    title: 'Update Record',

    bodyPadding: 10,
    items: [{
        xtype: 'textfield',
        name: 'firstname',
        label: 'First Name',
        bind: '{employee.firstName}'
    }, {
        xtype: 'textfield',
        name: 'lastname',
        label: 'Last Name',
        bind: '{employee.lastName}'

    }, {
        xtype: 'textfield',
        name: 'phonenumber',
        label: 'Phone Number',
        bind: '{employee.phoneNumber}'

    },{
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }],
    renderTo: Ext.getBody()
});
