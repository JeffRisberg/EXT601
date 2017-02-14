Ext.define('EXT601.store.Employees', {
    extend: 'Ext.data.Store',
    alias: 'store.employees',

    proxy: {
        type: 'ajax',
        url: 'data/employees.json'
    }
});
