Ext.define('app.store.Org', {
    extend: 'Ext.data.TreeStore',

	proxy: {
		type: 'ajax',
		url: 'data/org.txt'
	},
	root: {
		text: '群組織機構',
		expanded: true
	}
});