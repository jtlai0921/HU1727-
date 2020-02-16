Ext.define('app.controller.User', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'user',
        selector: 'user'
    }],

	models: ['User'],
    stores: ['User'],

    init: function() {
        this.control({
            'user': {
                show: this.onUserShow
            },
            'user button[action=add]': {
                click: this.onUserAdd
            },
            'user button[action=edit]': {
                click: this.onUserEdit
            },
            'user button[action=delete]': {
                click: this.onUserDelete
            }
        });
    },

	onUserShow: function() {
		this.getUserStore().reload();
	},

	onUserAdd: function() {
		var store = this.getUserStore();

		var activeForm = null;
		var activeWindow = null;

		activeForm = new Ext.form.FormPanel({
			frame: true,
			fieldDefaults: {
				labelAlign: 'right',
				labelWidth: 70
			},
			defaults: {
				xtype: 'textfield'
			},
			items: [{
				xtype: 'hidden',
				name: 'id'
			},{
				fieldLabel: '學號',
				name: 'code'
			},{
				fieldLabel: '姓名',
				name: 'name'
			},{
				fieldLabel: '年齡',
				name: 'age',
				xtype: 'numberfield',
				allowNegative: false
			},{
				fieldLabel: '性別',
				name: 'sex',
				xtype: 'combo',
				store: new Ext.data.SimpleStore({
					fields: [{name:'value',type:'int'},'text'],
					data: [['1','男'],['2','女']]
				}),
				emptyText: '請選取',
				mode: 'local',
				triggerAction: 'all',
				valueField: 'value',
				displayField: 'text',
				editable: false
			},{
				fieldLabel: '政治面貌',
				name: 'political',
				xtype: 'combo',
				store: new Ext.data.SimpleStore({
					fields: ['text'],
					data: [['群眾'],['黨員'],['團員']]
				}),
				emptyText: '請選取',
				mode: 'local',
				triggerAction: 'all',
				valueField: 'text',
				displayField: 'text',
				editable: false
			},{
				fieldLabel: '籍貫',
				name: 'origin'
			},{
				fieldLabel: '所屬系',
				name: 'professional'
			}],
			buttons: [{
				text: '傳送',
				handler: function() {
					var values = activeForm.getValues();
					store.insert(0, values);
					activeWindow.close();
				}
			}]
		});
		activeWindow = new Ext.Window({
			layout: 'fit',
			width: 300,
			height: 260,
			modal: true,
			items: [activeForm]
		});
		activeWindow.show();
	},

	onUserEdit: function() {
		var grid = this.getUser();
		var store = this.getUserStore();
		var sm = grid.getSelectionModel();
		if (sm.getSelection().length == 0) {
			Ext.Msg.alert('請選取一條記錄');
			return;
		}

		var record = sm.getSelection()[0];

		var activeForm = null;
		var activeWindow = null;

		activeForm = new Ext.form.FormPanel({
			frame: true,
			fieldDefaults: {
				labelAlign: 'right',
				labelWidth: 70
			},
			defaults: {
				xtype: 'textfield'
			},
			items: [{
				xtype: 'hidden',
				name: 'id'
			},{
				fieldLabel: '學號',
				name: 'code'
			},{
				fieldLabel: '姓名',
				name: 'name'
			},{
				fieldLabel: '年齡',
				name: 'age',
				xtype: 'numberfield',
				allowNegative: false
			},{
				fieldLabel: '性別',
				name: 'sex',
				xtype: 'combo',
				store: new Ext.data.SimpleStore({
					fields: [{name:'value',type:'int'},'text'],
					data: [['1','男'],['2','女']]
				}),
				emptyText: '請選取',
				mode: 'local',
				triggerAction: 'all',
				valueField: 'value',
				displayField: 'text',
				editable: false
			},{
				fieldLabel: '政治面貌',
				name: 'political',
				xtype: 'combo',
				store: new Ext.data.SimpleStore({
					fields: ['text'],
					data: [['群眾'],['黨員'],['團員']]
				}),
				emptyText: '請選取',
				mode: 'local',
				triggerAction: 'all',
				valueField: 'text',
				displayField: 'text',
				editable: false
			},{
				fieldLabel: '籍貫',
				name: 'origin'
			},{
				fieldLabel: '所屬系',
				name: 'professional'
			}],
			buttons: [{
				text: '傳送',
				handler: function() {
					var values = activeForm.getValues();
					record.set(values);

					activeWindow.close();
				}
			}]
		});
		activeWindow = new Ext.Window({
			layout: 'fit',
			width: 300,
			height: 260,
			modal: true,
			items: [activeForm]
		});

		activeForm.loadRecord(record);

		activeWindow.show();
	},

	onUserDelete: function() {
		var grid = this.getUser();
		var store = this.getUserStore();
		var sm = grid.getSelectionModel();
		store.remove(sm.getSelection());
		if (store.getCount() > 0) {
			sm.select(0);
		}
	}
});
