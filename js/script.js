function init(){
	var d1 = document.getElementById('entrybutton');
	d1.addEventListener('click',function() {
		var userText = document.getElementById('entryinput');
		var textOutput = document.getElementById('textoutput');
		alert('Desmond Mair: '+userText.value);
		textOutput.innerHTML = userText.value;
	});
}

window.addEventListener('load', init);