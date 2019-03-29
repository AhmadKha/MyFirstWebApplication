//written by Ahmad Khalidi
//based on the tutorial https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

//accessing a button by id.
var arrowButton = document.getElementById('button');

arrowButton.onclick = function() {
	// the picture is nested in a link, better would be to nest it even deeper
	// in sth like /pictures/link/img1
	myImageContainer = document.getElementById('picture');
	// accessing the image: should check here if image actually exists
	myImage = myImageContainer.getElementsByTagName("img")[0];
	// accessing the (full) path
	var mySrc = myImage.src;
	// needing Regex, because of the full path. They should be generated generic
	var _3dprintsRegex = new RegExp(".*images/3d-prints.png");
	var _3dPrintGreenRegex = new RegExp(".*images/3d-print-green.jpg");
	// depending which picture is showen atm
	if (_3dprintsRegex.exec(mySrc)) {
		// switch picture and link
		myImageContainer.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFJNP78jRueZ8wG-84QzyQmHgRCdoBM3u4EfzbdJJ2w2phpc-';
		myImage.src = 'images/3d-print-green.jpg';
	} else if (_3dPrintGreenRegex.exec(mySrc)) {
		myImageContainer.href = 'https://cdn.pixabay.com/photo/2016/06/13/21/33/printer-1455166_960_720.jpg';
		myImage.src = 'images/3d-prints.png';
	}

}

function pseudoDistributedJavaApplication() {
	return Math.random();
}
function pseudoDistributedPythonApplication() {
	return Math.random();
}
// Random Button
document.getElementById('JavaServiceRandomButton').onclick = function() {
	url = 'http://localhost:8080/JavaService/java-service/nextNr';
	var request = createCORSRequest('GET', url);
	if (!request) {
		alert('CORS not supported');
		return;
	}

	request.responseType = 'text';

	request.onload = function() {
		document.getElementById("JavaServiceResultField").innerText = request.response;
	};

	request.send();
}

// Adder Button
document.getElementById('JavaServiceAdderButton').onclick = function() {
	var number1 = document.getElementById('JavaServiceNumber1Field').value;
	var number2 = document.getElementById('JavaServiceNumber2Field').value;
	url = 'http://localhost:8080/JavaService/java-service/adder?number1='+number1+'&number2='+number2;
	var request = createCORSRequest('GET', url);
	if (!request) {
		alert('CORS not supported');
		return;
	}

	request.responseType = 'text';

	request.onload = function() {
		document.getElementById("JavaServiceResultField").innerText = request.response;
	};

	request.send();
}

//Multiplier Button
document.getElementById('JavaServiceMultiplierButton').onclick = function() {
	var number1 = document.getElementById('JavaServiceNumber1Field').value;
	var number2 = document.getElementById('JavaServiceNumber2Field').value;
	url = 'http://localhost:8080/JavaService/java-service/multiplier?number1='+number1+'&number2='+number2;
	var request = createCORSRequest('GET', url);
	if (!request) {
		alert('CORS not supported');
		return;
	}

	request.responseType = 'text';

	request.onload = function() {
		document.getElementById("JavaServiceResultField").innerText = request.response;
	};

	request.send();
}

var pythonButton = document.getElementById('pythonServiceContainer');
pythonButton.onclick = function() {
	// here the python application is supposed to be called via HTTP,
	// following soon
	/*
	 * const Http = new XMLHttpRequest(); const url =
	 * 'http//localhost:16001/python-service/nextNr'; Http.open("GET", url);
	 * Http.send(); Http.onreadystatechange=(e)=>{
	 * javaButton.getElementsByTagName("result")[0].innerText=Http.responseText; }
	 */

	pythonButton.getElementsByTagName("result")[0].innerText = pseudoDistributedPythonApplication();
}

// Hilfsmethode zum Erzeugen von CORS requests von
// https://www.html5rocks.com/en/tutorials/cors/
// Create the XHR object.
function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		// XHR for Chrome/Firefox/Opera/Safari.
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		// XDomainRequest for IE.
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		// CORS not supported.
		xhr = null;
	}
	return xhr;
}
