var location_i = 'title_m00';

var key_w

function transport_bus() {
	////////////////////////////////
	if (location_i == 'title_m00') {
		document.getElementById('headdiv').src = 'img/1.png';
		key_k = function () {
			location_i = 'title_m01';
			transport_bus();
		}
	}
	////////////////////////////////
	if (location_i == 'title_m01') {
		document.getElementById('headdiv').src = 'img/2.png';
		key_k = function () {
			location_i = 'new_game00';
			transport_bus();
		}
		key_l = function () {
			location_i = 'title_m00';
			transport_bus();
		}
	}
	////////////////////////////////
}

window.addEventListener('keydown', function (log_key) {
	if (log_key.code === 'KeyW') {
		key_w();
	}
	if (log_key.code === 'KeyA') {
		key_a();
	}
	if (log_key.code === 'KeyS') {
		key_s();
	}
	if (log_key.code === 'KeyD') {
		key_d();
	}
	if (log_key.code === 'KeyK') {
		key_k();
	}
	if (log_key.code === 'KeyL') {
		key_l();
	}
})

transport_bus();