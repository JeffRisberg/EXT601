/**
 * A ViewController for the popup form which handles posting of changes back to store.
 */
Ext.define('QuickStart.view.main.PopupFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popupform',

    cancelUpdate: function () {
        var view = this.getView(),
            window = view.up('window'),
            record = view.getRecord();

        window.destroy();
        //record.reject();
    },

    submitUpdate: function (me) {
        var view = this.getView(),
            window = view.up('window'),
            record = view.getRecord();

        window.destroy();
        //record.commit();
    }
});
