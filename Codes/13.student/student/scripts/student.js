
Ext.onReady(function() {

    Ext.QuickTips.init();

    var sexRenderer = function(value) {
        if (value == 1) {
            return '<span style="color:red;font-weight:bold;">男</span>';
        } else if (value == 2) {
            return '<span style="color:green;font-weight:bold;">女</span>';
        }
    };

	Ext.define('StudentRecord', {
		extend: 'Ext.data.Model',
		fields: [
			{name: 'id', type: 'int'},
			{name: 'code', type: 'string'},
			{name: 'name', type: 'string'},
			{name: 'sex', type: 'int'},
			{name: 'age', type: 'int'},
			{name: 'political', type: 'string'},
			{name: 'origin', type: 'string'},
			{name: 'professional', type: 'string'}
		]
	});

    var store = new Ext.data.Store({
		pageSize: 15,
		proxy: {
			type: 'ajax',
			url: './jsp/list.jsp',
			reader: {
				type: 'json',
				totalProperty: 'totalCount',
				root: 'result',
				idProperty: 'id'
			}
		},
		model: StudentRecord,
        remoteSort: true
    });
    store.load();

    var columns = [
        {header: '學號', dataIndex: 'code'},
        {header: '姓名', dataIndex: 'name'},
        {header: '性別', dataIndex: 'sex', renderer: sexRenderer},
        {header: '年齡', dataIndex: 'age'},
        {header: '政治面貌', dataIndex: 'political'},
        {header: '籍貫', dataIndex: 'origin'},
        {header: '所屬系', dataIndex: 'professional'}
    ];

    // grid start
    var grid = new Ext.grid.GridPanel({
        title: '學生訊息清單',
        region: 'center',
        loadMask: true,
        store: store,
        columns: columns,
		forceFit: true,
        bbar: new Ext.PagingToolbar({
            pageSize: 15,
            store: store,
            displayInfo: true
        })
    });
    // grid end

    // form start
    var form = new Ext.form.FormPanel({
        title: '編輯學生訊息',
        region: 'east',
        frame: true,
        width: 260,
        autoHeight: true,
        defaultType: 'textfield',
        defaults: {
            allowBlank: false,
			labelAlign: 'right',
			labelWidth: 60
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
			id: 'buttonSave',
            text: '加入',
            handler: function() {
                if (!form.getForm().isValid()) {
                    return;
                }
                if (form.getForm().findField("id").getValue() == "") {
                    // 加入
                    form.getForm().submit({
                        url: './jsp/save.jsp',
                        success: function(f, action) {
                            if (action.result.success) {
                                Ext.Msg.alert('訊息', action.result.msg, function() {
                                    grid.getStore().reload();
                                    form.getForm().reset();
									Ext.getCmp('buttonSave').setText('加入');
                                });
                            }
                        },
                        failure: function() {
                            Ext.Msg.alert('錯誤', "加入失敗");
                        }
                    });
                } else {
                    // 修改
                    form.getForm().submit({
                        url: './jsp/save.jsp',
                        success: function(f, action) {
                            if (action.result.success) {
                                Ext.Msg.alert('訊息', action.result.msg, function() {
                                    grid.getStore().reload();
                                    form.getForm().reset();
									Ext.getCmp('buttonSave').setText('加入');
                                });
                            }
                        },
                        failure: function() {
                            Ext.Msg.alert('錯誤', "修改失敗");
                        }
                    });
                }
            }
        },{
            text: '清理',
            handler: function() {
                form.getForm().reset();
				Ext.getCmp('buttonSave').setText('加入');
            }
        },{
            text: '移除',
            handler: function() {
                var id = form.getForm().findField('id').getValue();
                if (id == '') {
                    Ext.Msg.alert('提示', '請選取需要移除的訊息。');
                } else {
                    Ext.Ajax.request({
                        url: './jsp/remove.jsp',
                        success: function(response) {
                            var json = Ext.decode(response.responseText);
                            if (json.success) {
                                Ext.Msg.alert('訊息', json.msg, function() {
                                    grid.getStore().reload();
                                    form.getForm().reset();
									Ext.getCmp('buttonSave').setText('加入');
                                });
                            }
                        },
                        failure: function() {
                            Ext.Msg.alert('錯誤', "移除失敗");
                        },
                        params: "id=" + id
                    });
                }
            }
        }]
    });
    // form end

    // 點選修改訊息 start
    grid.on('itemclick', function(view, record) {
        form.getForm().loadRecord(record);
        Ext.getCmp('buttonSave').setText('修改');
    });
    // 點選修改訊息 end

    // layout start
    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [{
            region: 'north',
            contentEl: 'head'
        }, grid, form, {
            region: 'south',
            contentEl: 'foot'
        }]
    });
    // layout end
});

