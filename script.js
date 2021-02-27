function validation() {
	var inputchecker = document.getElementById('input-checker').value;
	
	if (inputchecker.length === 0) {
		document.getElementById('validation-caution').innerHTML="*Va rugam sa completati campul*";
		return;
	}
	
	else if (inputchecker >= 60 && inputchecker <= 100) {
		document.getElementById('positive-answer').style.display="inline";
		document.getElementById('negative-answer').style.display="none";
		document.getElementById('negative-answer-2').style.display="none";
		return
	}
	
	else if (inputchecker < 60 ) {
		document.getElementById('negative-answer').style.display="inline";
		document.getElementById('negative-answer-2').style.display="none";
		document.getElementById('positive-answer').style.display="none";
		return;
	}
	else if (inputchecker > 100 ) {
		document.getElementById('negative-answer-2').style.display="inline";
		document.getElementById('negative-answer').style.display="none";
		document.getElementById('positive-answer').style.display="none";
		return
	}
}