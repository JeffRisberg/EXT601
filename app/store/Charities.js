Ext.define('EXT601.store.Charities', {
    extend: 'Ext.data.Store',
    alias: 'store.charities',

    proxy: {
        type: 'ajax',
        url: 'data/charities.json'
    }
});
