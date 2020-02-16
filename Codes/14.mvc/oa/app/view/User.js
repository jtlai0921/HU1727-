
var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
	clicksToMoveEditor: 1,
	autoCancel: false
});

Ext.define('app.view.User', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.user',
	title: '使用者管理',
	iconCls: 'icon-user',
	columns: [
        {header: '學號', dataIndex: 'code'},
        {header: '姓名', dataIndex: 'name'},
        {header: '性別', dataIndex: 'sex', renderer: function(value) {
			if (value == 1) {
				return '<span style="color:red;font-weight:bold;">男</span>';
			} else if (value == 2) {
				return '<span style="color:green;font-weight:bold;">女</span>';
			}
		}},
        {header: '年齡', dataIndex: 'age'},
        {header: '政治面貌', dataIndex: 'political'},
        {header: '籍貫', dataIndex: 'origin'},
        {header: '所屬系', dataIndex: 'professional'}
    ],
	store: 'User',
	forceFit: true,
	tbar: [{
		iconCls: 'icon-add',
		text: '加入',
		action: 'add'
	}, {
		iconCls: 'icon-edit',
		text: '修改',
		action: 'edit'
	}, {
		iconCls: 'icon-delete',
		text: '移除',
		action: 'delete'
	}],
	bbar: {
		xtype: 'pagingtoolbar',
		pageSize: 15,
		store: 'User',
		displayInfo: true
	}
});
