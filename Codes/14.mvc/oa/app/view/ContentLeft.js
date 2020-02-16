Ext.define('app.view.ContentLeft', {
    extend: 'Ext.Panel',
    alias: 'widget.contentleft',
	layout: 'accordion',
	items: [{
		iconCls: 'icon-sys',
		title: '系統管理',
		xtype: 'treepanel',
		rootVisible: false,
		root: {
			children: [{
				iconCls: 'icon-user',
				text: '使用者管理',
				leaf: true
			}, {
				iconCls: 'icon-org',
				text: '群組織機構管理',
				leaf: true
			}, {
				iconCls: 'icon-auth',
				text: '權限管理',
				leaf: true
			}]
		}
	}, {
		iconCls: 'icon-content',
		title: '公文管理',
		xtype: 'treepanel',
		rootVisible: false,
		root: {
			children: [{
				iconCls: 'icon-catalog',
				text: '分類別管理',
				leaf: true
			}, {
				iconCls: 'icon-article',
				text: '公文管理',
				leaf: true
			}]
		}
	}, {
		iconCls: 'icon-report',
		title: '統計報表',
		xtype: 'treepanel',
		rootVisible: false,
		root: {
			children: [{
				iconCls: 'icon-chart',
				text: '統計報表',
				leaf: true
			}]
		}
	}]
});