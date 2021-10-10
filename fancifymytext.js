function bigger(){
	document.getElementById("textfield").style.fontSize = "24pt";
}

function fancystuff(){
	document.getElementById("boring").checked = false;
	document.getElementById("textfield").style.textDecoration = "underline";
	document.getElementById("textfield").style.color = "blue";
	document.getElementById("textfield").style.fontWeight = "bold";
}

function boringstuff(){
	document.getElementById("fancy").checked = false;
	document.getElementById("textfield").style.fontSize = "10pt";
	document.getElementById("textfield").style.textDecoration = "none";
	document.getElementById("textfield").style.color = "black";
	document.getElementById("textfield").style.fontWeight = "normal";
}

function moo(){
	var text = document.getElementById("textfield");
	text.style.textTransform = "uppercase";
	text.value = text.value.split(".").join("-Moo.");
}