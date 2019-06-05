const locations = {
	'Ytheres' : {
		'Tutaria' : {
			name: 'Tutaria',
			type: 'town',
			options : [
				{
					'title' : 'Tutaria General',
					'action' : 'shop_tutariageneral',
					'icon_name' : 'fa fa-shopping-basket',
					'opentimes' : [1,2,3]
				},
				{
					'title' : 'Café Ytheria',
					'action' : 'shop_tutariageneral',
					'icon_name' : 'fa fa-coffee',
					'opentimes' : [0,1,2,3,4]
				},
				{
					'title' : 'Explore Otara Ruins',
					'action' : 'dgn_s0_otara',
					'icon_name' : 'fa fa-arrows',
					'opentimes' : [0,1,2,3,4,5,6,7]
				},
				{
					'title' : 'Sleep in Hotel',
					'action' : 'htl_tutaria',
					'icon_name' : 'fa fa-bed',
					'opentimes' : [4,5,6,7]
				}
			]
		}
	}
};