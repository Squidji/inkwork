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
			document.getElementById('logbox').setAttribute( 'onClick', 'loadPage("' + dialogue[logid].perams.endgoto + '")' );
		} else {
			document.getElementById('logbox').setAttribute( 'onClick', 'loadPage("' + pagename + '")' );
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
		document.getElementById('opti_nameapply').setAttribute( 'onClick', 'player.name = ' +
		'document.getElementById("opti_namefield").value; loadPage("defhome");' );
	}
	
	else if (pagename =='opti_file') {
		loadPage('opti');
	};
};

window.addEventListener('keydown', function (log_key) {
	if (log_key.code === 'KeyR') {
		loadPage('initdio_tutorial001');
	}
});