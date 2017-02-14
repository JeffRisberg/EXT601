Ext.define('EXT601.view.main.CharityListView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.charitylistview',

    controller: 'charitylistview',

    store: {
        type: 'charities',
        autoLoad: true,
        sorters: ['name', 'description']
    },
    listeners: {
        rowclick: 'onPopupForm',
        scope: 'controller'
    },
    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 2
    }, {
        text: 'EIN',
        dataIndex: 'ein',
        flex: 1
    }, {
        text: 'Description',
        dataIndex: 'description',
        flex: 5
    }],
    width: 700
});
