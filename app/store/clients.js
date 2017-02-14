Ext.define('AppName.store.Clients', {
    extend: 'Ext.data.Store',

    alias: 'store.clients',

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { id: 25, name: '1-800-Dentist', email: "tom@1800dentist.com",   phone: "555-111-1111", lastModified: "2017-01-08" },
        { id: 45, name: 'Advance Auto',  email: "helen@advanceauto.com", phone: "555-111-1111", lastModified: "2016-11-21" },
        { id: 45, name: 'Balsam Brands', email: "jack@balsambrands.com", phone: "555-111-1111", lastModified: "2016-12-01" },
        { id: 78, name: 'BeenVerified',  email: "bill@beenverified.com", phone: "555-444-4444", lastModified: "2017-01-01" },
        { id: 77, name: 'BestReviews',   email: "sally@bestreviews.com", phone: "555-333-3333", lastModified: "2016-12-17" },
        { id: 35, name: 'Endurance',     email: "bob@endurance.com",     phone: "555-222-2222", lastModified: "2016-12-16" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
