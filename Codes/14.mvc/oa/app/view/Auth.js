Ext.define('app.view.Auth', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.auth',
	title: '權限管理',
	iconCls: 'icon-auth',
	columns: [
        {header: '編號', dataIndex: 'id'},
        {header: '名稱', dataIndex: 'name'}
    ],
    store: 'Auth',
	forceFit: true,
	bbar: {
		xtype: 'pagingtoolbar',
		pageSize: 15,
		store: 'Auth',
		displayInfo: true
	}
});
