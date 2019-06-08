const items = {
	'Book of Nartiad I' : {
		'type' : 'keyitem',
		'onuse_menu' : function() {loadPage('docr', 'nartiad1', 0)},
		'onuse_battle' : 'error("Can not be used in battle.")',
		'cansell' : false,
		'basevalue' : 0,
		'onetimeuse' : false
	},
	'Book of Nartiad II' : {
		'type' : 'keyitem',
		'onuse_menu' : function() {loadPage('docr', 'nartiad2', 0)},
		'onuse_battle' : 'error("Can not be used in battle.")',
		'cansell' : false,
		'basevalue' : 0,
		'onetimeuse' : false
	},
	'Bandage' : {
		'type' : 'heal', //Heal 20HP
		'onuse_menu' : '',
		'onuse_battle' : '',
		'cansell' : true,
		'basevalue' : 10,
		'onetimeuse' : true
	},
	'Plain Roast' : {
		'type' : 'heal', //Heal 5 MNA
		'onuse_menu' : '',
		'onuse_battle' : '',
		'cansell' : true,
		'basevalue' : 15,
		'onetimeuse' : true
	}
};