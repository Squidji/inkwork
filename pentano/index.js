function loadPage(pagename, perama, peramb, peramc, peramd) {

	var pages = document.getElementsByClassName('page');
	for (i = 0; i < pages.length; i++) {
		pages[i].style.display = 'none';
	}
	
	document.getElementById('errorbox').style.display = 'none';
	document.getElementById('successbox').style.display = 'none';

	player.previousload = player.currentload;
	player.currentload = pagename;

	if (player.timeid == 8) {
		player.timeid = 0;
	}
	
	if (pagename == 'menu') {
		document.getElementById('menu').style.display = 'block';
		document.getElementById('h1dhome').innerText = player.name + ' - Menu';
		document.getElementById('h2dhome').innerHTML = player.location + ' - ' +
		'Lv. ' + player.level + ' - HP <green-bar><div id="hpihome"></div></green-bar>';
		player.max_xp + 'xp';
		let widi = player.hp / player.max_hp;
		widi = widi * 100;
		widi = Math.round(widi);
		document.getElementById('hpihome').style.width = widi + '%';
		document.getElementById('homeopt').innerHTML = '';
		for (let i=0; i < player.menuitems.length; i++) {
			let elm = document.createElement('h4');
			elm.appendChild(document.createTextNode(menu_options[player.menuitems[i]].title));
			document.getElementById('homeopt').appendChild(elm);
			let act = document.createAttribute('onClick');
			act.value = 'loadPage("' + menu_options[player.menuitems[i]].pageload + '");';
			elm.setAttributeNode(act);
		};
	}

	else if (pagename == 'explore') {
		document.getElementById('explchoices').innerHTML = '';
		document.getElementById('explore').style.display = 'block';
		document.getElementById('explhead').innerText = player.location +
		', ' + player.world + ' - ' + reference.time[player.timeid];
		for (let i=0; i < locations[player.world][player.location].options.length; i++) {
			if (locations[player.world][player.location].options[i].opentimes.includes(player.timeid)) {
				let elm = document.createElement('h4');
				elm.appendChild(document.createTextNode(locations[player.world][player.location].options[i].title));
				let am = document.createAttribute('onClick');
				let op = locations[player.world][player.location].options[i]
				am.value = 'loadPage(' + op.action + ', ' + op.perama + ', ' + op.peramb + ', ' + 
				op.peramc + ', ' + op.peramd + ');';
				elm.setAttributeNode(am);
				document.getElementById('explchoices').appendChild(elm);
			};
		};
	}

	else if (pagename == 'initdio') {
		// perama = dialogue id
		player.dialogue_index = 0-1;
		loadPage('dio', perama);
	}

	else if (pagename == 'dio') {
		//perama = dialogue id
		player.dialogue_index++;
		document.getElementById('dialogue').style.display = 'block';
		document.getElementById('logname').innerText = dialogue[perama].text[player.dialogue_index][0];
		document.getElementById('logpfp').src = dialogue[perama].text[player.dialogue_index][1];
		document.getElementById('logtext').innerText = dialogue[perama].text[player.dialogue_index][2];
		if (player.dialogue_index == dialogue[perama].perams.last_index) {
			document.getElementById('logbox').setAttribute('onClick', 'loadPage("' + dialogue[perama].perams.endgoto + '")');
		} else {
			document.getElementById('logbox').setAttribute('onClick', 'loadPage("' + pagename + '")');
		};
	}

	else if (pagename == 'sata') {
		document.getElementById('stats').style.display = 'block';
		document.getElementById('stathead').innerText = player.name + ' Lv.' + player.level;
		document.getElementById('statbar2').innerHTML = 'HP <green-bar><div id="stathp">' +
		'</div></green-bar> ' + player.hp + '/' + player.max_hp;
		document.getElementById('statbar3').innerHTML = 'MNA <blue-bar><div id="statmna">' +
		'</div></blue-bar> ' + player.mna + '/' + player.max_mna;
		document.getElementById('statbar4').innerText = player.money + currency;
		let hpw = player.hp / player.max_hp;
		hpw = hpw * 100;
		hpw = Math.round(hpw);
		document.getElementById('stathp').style.width = hpw + '%';
		let mnaw = player.mna / player.max_mna;
		mnaw = mnaw * 100;
		mnaw = Math.round(mnaw);
		document.getElementById('statmna').style.width = mnaw + '%';
	}

	else if (pagename == 'items') {
		document.getElementById('items').style.display = 'block';
		document.getElementById('itemsgroup').innerHTML = '';
		for (let i=0; i<player.items.length; i++) {
			let elm = document.createElement('h3');
			elm.appendChild(document.createTextNode(player.items[i][0]));
			let am = document.createAttribute('amnt');
			am.value = 'x' + player.items[i][1] + ' ';
			elm.setAttributeNode(am);
			am = document.createAttribute('onclick');
			am.value = 'items["' + player.items[i][0] + '"].onuse_menu();';
			elm.setAttributeNode(am);
			document.getElementById('itemsgroup').appendChild(elm);
		};
	}

	else if (pagename == 'map') {
		document.getElementById('map').style.display = 'block';
	}

	else if (pagename == 'opti') {
		document.getElementById('settings').style.display = 'block';
	}

	else if (pagename == 'opti_name') {
		document.getElementById('settings_name').style.display = 'block';
		document.getElementById('opti_namefield').value = player.name;
		document.getElementById('opti_nameapply').setAttribute('onClick', 'player.name = ' +
		'document.getElementById("opti_namefield").value; loadPage("menu");');
	}

	else if (pagename == 'opti_file') {
		loadPage('opti');
		error('Under Development');
	}

	else if (pagename =='docr') {
		// perama = docname
		// peramb = docpage
		document.getElementById('documentread').style.display = 'block';
		document.getElementById('docrtitle').innerText = game_documents[perama].title;
		document.getElementById('docrtext').innerHTML = game_documents[perama].text[peramb];
		if (peramb != game_documents[perama].minpage) {
			let backpage = peramb - 1;
			document.getElementById('docrback').setAttribute('onClick', 'loadPage("docr", "' + 
			perama + '", ' + backpage + ');');
			document.getElementById('docrback').style.opacity = 1;
		} else {
			document.getElementById('docrback').setAttribute('onClick', '' );
			document.getElementById('docrback').style.opacity = 0.3;
		}
		if (peramb != game_documents[perama].maxpage) {
			let nextpage = peramb + 1;
			document.getElementById('docrnext').setAttribute('onClick', 'loadPage("docr", "' + 
			perama + '", ' + nextpage + ');');
			document.getElementById('docrnext').style.opacity = 1;
		} else {
			document.getElementById('docrnext').setAttribute('onClick', '' );
			document.getElementById('docrnext').style.opacity = 0.3;
		}
	}

	else if (pagename == 'shop') {
		//perama = shopname
		document.getElementById('shop').style.display = 'block';
		document.getElementById('shoph1').innerText = shops[perama].title;
		document.getElementById('shoph2').innerText = player.name + ' - '
		document.getElementById('shoph2').setAttribute('mval', '' + player.money + currency);
		document.getElementById('shopitems').innerHTML = '';
		for (let i=0; i<shops[perama].items.length; i++) {
			let elm = document.createElement('h4');
			if (shops[perama].items[i].number == 1) {
				elm.appendChild(document.createTextNode(shops[perama].items[i].item));
			} else if (shops[perama].items[i].number > 1) {
				elm.appendChild(document.createTextNode(shops[perama].items[i].item + 
				' x' + shops[perama].items[i].number));
			}
			let aft = document.createAttribute('cst');
			aft.value = ' ' + shops[perama].items[i].cost + currency
			elm.setAttributeNode(aft);
			let clk = document.createAttribute('onclick');
			clk.value = 'buyShopItem("' + perama + '", "' + shops[perama].items[i].item + '", ' + 
			shops[perama].items[i].number + ', ' + shops[perama].items[i].cost + ');';
			elm.setAttributeNode(clk);
			document.getElementById('shopitems').appendChild(elm);
		}
	}

	else if (pagename.startsWith('htl')) {
		document.getElementById('hotel').style.display = 'block';
	}
	
	else if (pagename.startsWith('dgn')) {
		// perama = dungeonid
		// peramb = player start x
		// peramc = player start y
		document.getElementById('dungeon').style.display = 'block';
		document.getElementById('dgnh1').innerText = dungeons[perama].title;
	};
}

function error(message) {
	document.getElementById('successbox').style.display = 'none';
	document.getElementById('errorbox').style.display = 'block';
	document.getElementById('errorbox').innerText = message;
};

function success(message) {
	document.getElementById('errorbox').style.display = 'none';
	document.getElementById('successbox').style.display = 'block';
	document.getElementById('successbox').innerText = message;
}

function additem(itemid, number) { //adds item to inventory
	let findyes = false;
	for (let i=0; i<player.items.length; i++) {
		if (player.items[i][0] == itemid) {
			player.items[i][1] += number;
			findyes = true;
		};
	};
	if (findyes == false) {
		player.items.push([itemid, number]);
	}
};

function buyShopItem(shopname, itemid, number, price) {
	if (player.money >= price) {

		player.money -= price;
		additem(itemid, number);
		loadPage('shop', shopname);
		success('Successful Purchase');
	} else {
		error('You don\'t have enough money to buy this.');
	}
};

function startgame() {
	document.title = system.title;
	eval(system.startexec);
};

window.addEventListener('keydown', function (log_key) {
	if (log_key.code === 'KeyQ') {};
});