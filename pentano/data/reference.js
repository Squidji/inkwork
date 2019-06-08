var system = {
	title : 'Pentano',
	startexec : 'loadPage("explore");',
};

const reference = {
	'time' : ['Sunrise', 'Morning', 'Noon', 'Afternoon', 'Sunset', 'Night', 'Midnight', 'Night']
};

const currency = 'G'

const menu_options = {
	'stats' : {
		'title' : 'Stats',
		'pageload' : 'sata'
	},
	'items' : {
		'title' : 'Items',
		'pageload' : 'items'
	},
	'map' : {
		'title' : 'Map',
		'pageload' : 'map'
	},
	'settings' : {
		'title' : 'Settings',
		'pageload' : 'opti'
	}
};

const game_documents = {
	'nartiad1' : {
		'title' : 'The Book of Nartiad I',
		'minpage' : 0,
		'maxpage' : 3,
		'text' : {
			0 : 'Chapter One',
			1 : 'Chapter Two',
			2 : 'Chapter Three',
			3 : 'Chapter Four'
		}
	},
	'nartiad2' : {
		'title' : 'The Book of Nartiad II',
		'minpage' : 0,
		'maxpage' : 1,
		'text' : {
			0 : 'Chapter One',
			1 : 'Chapter Two'
		}
	}
};