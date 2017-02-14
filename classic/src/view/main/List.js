/**
 * This view is an example list of clients.
 */
Ext.define('AppName.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'AppName.store.Clients'
    ],

    title: 'Clients',

    store: {
        type: 'clients'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1},
        { text: 'Id',  dataIndex: 'id'},
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Last Modified', dataIndex: 'lastModified', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
