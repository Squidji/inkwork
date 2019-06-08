const locations = {
	'Ytheres' : {
		'Tutaria' : {
			name: 'Tutaria',
			type: 'town',
			options : [
				{
					'title' : 'Tutaria General',
					'action' : '"shop"',
					'perama' : '"tutariageneral"',
					'peramb' : null,
					'peramc' : null,
					'peramd' : null,
					'icon_name' : 'fa fa-shopping-basket',
					'opentimes' : [1,2,3]
				},
				{
					'title' : 'Café Yther',
					'action' : '"shop"',
					'perama' : '"tutaria_cafeyther"',
					'peramb' : null,
					'peramc' : null,
					'peramd' : null,
					'icon_name' : 'fa fa-coffee',
					'opentimes' : [0,1,2,3,4]
				},
				{
					'title' : 'Explore Otara Ruins',
					'action' : '"dgn"',
					'perama' : '"otara"',
					'peramb' : 0, //spawn location x
					'peramc' : 0, //spawn location y
					'peramd' : null,
					'icon_name' : 'fa fa-arrows',
					'opentimes' : [0,1,2,3,4,5,6,7]
				},
				{
					'title' : 'Sleep in Hotel',
					'action' : '"htl"',
					'perama' : '"tutaria"',
					'peramb' : null,
					'peramc' : null,
					'peramd' : null,
					'icon_name' : 'fa fa-bed',
					'opentimes' : [4,5,6,7]
				}
			]
		}
	}
};