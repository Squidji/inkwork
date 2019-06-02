function loadPage(pagename) {

	var pages = document.getElementsByClassName('page');
	for (i = 0; i < pages.length; i++) {
		pages[i].style.display = 'none';
	}

	if (pagename == 'defhome') {
		document.getElementById('menu').style.display = 'block';
		document.getElementById('h1dhome').innerText = player.location +
		', ' + player.world + ' - ' + reference.time[player.timeid];
		document.getElementById('h2dhome').innerHTML = player.name + ' - ' +
		'Lv. ' + player.level + ' - HP <green-bar><div id="hpihome"></div></green-bar>';
		player.max_xp + 'xp';
		let widi = player.hp / player.max_hp;
		widi = widi * 100;
		widi = Math.round(widi);
		document.getElementById('hpihome').style.width = widi + '%';
	}
	
	else if (pagename.startsWith('initdio_')) {
		var logid = pagename.slice(8);
		player.dialogue_index = 0-1;
		loadPage('dio_' + logid);
	}

	else if (pagename.startsWith('dio_')) {
		var logid = pagename.slice(4);
		player.dialogue_index++;
		document.getElementById('dialogue').style.display = 'block';
		document.getElementById('logname').innerText = dialogue[logid].text[player.dialogue_index][0];
		document.getElementById('logpfp').src = dialogue[logid].text[player.dialogue_index][1];
		document.getElementById('logtext').innerText = dialogue[logid].text[player.dialogue_index][2];
		if (player.dialogue_index == dialogue[logid].perams.last_index) {
			document.getElementById('logbox').setAttribute('onClick', 'loadPage("' + dialogue[logid].perams.endgoto + '")');
		} else {
			document.getElementById('logbox').setAttribute('onClick', 'loadPage("' + pagename + '")');
		}
	}

	else if (pagename =='explore') {
		document.getElementById('explore').style.display = 'block';
	}

	else if (pagename == 'stata') {
		document.getElementById('stats').style.display = 'block';
		document.getElementById('stathead').innerText = player.name + ' Lv.' + player.level;
		document.getElementById('statbar2').innerHTML = 'HP <green-bar><div id="stathp">' +
		'</div></green-bar> ' + player.hp + '/' + player.max_hp;
		document.getElementById('statbar3').innerHTML = 'MNA <blue-bar><div id="statmna">' +
		'</div></blue-bar> ' + player.mna + '/' + player.max_mna;
		let hpw = player.hp / player.max_hp;
		hpw = hpw * 100;
		hpw = Math.round(hpw);
		document.getElementById('stathp').style.width = hpw + '%';
		let mnaw = player.mna / player.max_mna;
		mnaw = mnaw * 100;
		mnaw = Math.round(mnaw);
		document.getElementById('statmna').style.width = mnaw + '%';
	}

	else if (pagename =='items') {
		document.getElementById('items').style.display = 'block';
		document.getElementById('itemsgroup').innerHTML = '';
		for (let i=0; i<player.items.length; i++) {
			let elm = document.createElement('h3');
			elm.appendChild(document.createTextNode(player.items[i][0]));
			let am = document.createAttribute('amnt');
			am.value = 'x' + player.items[i][1] + ' ';
			elm.setAttributeNode(am);
			am = document.createAttribute('onClick');
			am.value = items[player.items[i][0]].onuse_menu;
			elm.setAttributeNode(am);
			document.getElementById('itemsgroup').appendChild(elm);
		}
	}
	
	else if (pagename =='area') {
		document.getElementById('map').style.display = 'block';
	}

	else if (pagename =='opti') {
		document.getElementById('settings').style.display = 'block';
	}

	else if (pagename =='opti_name') {
		document.getElementById('settings_name').style.display = 'block';
		document.getElementById('opti_namefield').value = player.name;
		document.getElementById('opti_nameapply').setAttribute('onClick', 'player.name = ' +
		'document.getElementById("opti_namefield").value; loadPage("defhome");');
	}
	
	else if (pagename =='opti_file') {
		loadPage('opti');
	}
	
	else if (pagename.startsWith('docr_')) {
		let docpage = parseInt(pagename.slice(5, 8));
		let docname = pagename.slice(9);
		document.getElementById('documentread').style.display = 'block';
		document.getElementById('docrtitle').innerText = game_documents[docname].title;
		document.getElementById('docrtext').innerHTML = game_documents[docname].text[docpage];
		if (docpage != game_documents[docname].minpage) {
			let backpage = docpage - 1;
			backpage = ('000' + backpage).substr(-3);
			document.getElementById('docrback').setAttribute('onClick', 'loadPage("docr_' + backpage + '_' + docname + '");');
			document.getElementById('docrback').style.opacity = 1;
		} else {
			document.getElementById('docrback').setAttribute('onClick', '' );
			document.getElementById('docrback').style.opacity = 0.5;
		}
		if (docpage != game_documents[docname].maxpage) {
			let nextpage = docpage + 1;
			nextpage = ('000' + nextpage).substr(-3);
			document.getElementById('docrnext').setAttribute('onClick', 'loadPage("docr_' + nextpage + '_' + docname + '");');
			document.getElementById('docrnext').style.opacity = 1;
		} else {
			document.getElementById('docrnext').setAttribute('onClick', '' );
			document.getElementById('docrnext').style.opacity = 0.5;
		}
	};
};

function error() {};

function startgame() {
	document.title = system.title;
	eval(system.startexec);
};

window.addEventListener('keydown', function (log_key) {
	if (log_key.code === 'KeyR') {
		loadPage('initdio_tutorial001');
	}
});