// VanillaJS v1.0

(function() {
  window.onload = function() {
	var block = document.getElementsByClassName('buttons')[0];
	var check = document.getElementsByClassName('ccheck');
	var lin = document.getElementsByClassName('link');
	var saved = document.getElementById('saved');
	var b1 = document.getElementById('button1');
	var b2 = document.getElementById('button2');
	var current, saveDisp, previous;
	loadState();
	(function seteventschek() {
		for (var i = 0; i < check.length; i++) {
			check[i].onclick = cevent;
		};
	}());
	(function seteventslink() {
		for (var i = 0; i < lin.length; i++) {
			lin[i].onclick = changeView;
		};
	}());
	function cevent(event) {
		current = event.currentTarget;
		clearInterval(saveDisp);
		saved.style.display = "none";
    	block.style.display = "block";
    	disable();
	}
	b1.onclick = function() {
		block.style.display = "none";
		current.checked == true ? current.checked = false : current.checked = true;
		enable();
	}
	b2.onclick = function() {
		block.style.display = "none";
		saveState();
		enable();
	}
	function disable() {
		for (var i = 0; i < check.length; i++) {
			check[i].disabled = true;
		};
	}
	function enable() {
		for (var i = 0; i < check.length; i++) {
			check[i].disabled = false;
		};
	}
	function saveState() {
		localStorage["c1"] = check[0].checked;
		localStorage["c2"] = check[1].checked;
		
		saved.style.display = "block";
		saveDisp = setTimeout(function() {
			saved.style.display = "none";
		}, 1500);
 	}
 	function loadState() {
 		localStorage["c1"] == 'true' ? check[0].checked = true : check[0].checked = false;
 		localStorage["c2"] == "true" ? check[1].checked = true : check[1].checked = false;
  	}
  	
  	function changeView(event) {
  		previous  ? previous.style.display = 'none' : previous = document.getElementById('cont3');
  		if(previous)
  		previous.style.display = 'none'
  		var newcontid = document.getElementById('cont' + event.currentTarget.id.charAt(1));
  		newcontid.style.display = 'block';
  		previous = newcontid;
  	}
}    
}());