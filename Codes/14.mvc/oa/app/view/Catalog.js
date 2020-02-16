Ext.define('app.view.Catalog', {
    extend: 'Ext.grid.GridPanel',
    alias: 'widget.catalog',
	title: '分類別管理',
	iconCls: 'icon-catalog',
	columns: [
        {header: '編號', dataIndex: 'id'},
        {header: '名稱', dataIndex: 'name'}
    ],
    store: 'Catalog',
	forceFit: true,
	bbar: {
		xtype: 'pagingtoolbar',
		pageSize: 15,
		store: 'Catalog',
		displayInfo: true
	}
});
