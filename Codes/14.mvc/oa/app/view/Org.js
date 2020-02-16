var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
	clicksToEdit: 2
});

Ext.define('app.view.Org', {
    extend: 'Ext.tree.TreePanel',
    alias: 'widget.org',
	title: '群組織機構管理',
	iconCls: 'icon-org',
    store: 'Org',
	plugins: [cellEditing],
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
	columns: [{
		xtype: 'treecolumn',
		dataIndex: 'text',
		flex: 1,
		editor: {xtype: 'textfield'}
	}]
});
