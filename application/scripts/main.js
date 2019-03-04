//written by Ahmad Khalidi
//based on the tutorial https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics


//accessing a button by id.
	var arrowButton = document.getElementById('button');


	arrowButton.onclick = function() {
	//the picture is nested in a link, better would be to nest it even deeper in sth like /pictures/link/img1
	myImageContainer = document.getElementById('picture');
	//accessing the image: should check here if image actually exists
	myImage = myImageContainer.getElementsByTagName("img")[0];
	//accessing the (full) path
 	var mySrc = myImage.src;
 	//needing Regex, because of the full path. They should be generated generic
 	var _3dprintsRegex = new RegExp(".*images/3d-prints.png");
 	var _3dPrintGreenRegex = new RegExp(".*images/3d-print-green.jpg");
 	//depending which picture is showen atm
    if(_3dprintsRegex.exec(mySrc)) {
    	//switch picture and link
	  myImageContainer.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFJNP78jRueZ8wG-84QzyQmHgRCdoBM3u4EfzbdJJ2w2phpc-';
      myImage.src= 'images/3d-print-green.jpg';
    } else if(_3dPrintGreenRegex.exec(mySrc)){
     myImageContainer.href  = 'https://cdn.pixabay.com/photo/2016/06/13/21/33/printer-1455166_960_720.jpg';
      myImage.src= 'images/3d-prints.png';
    }

    }

	function pseudoDistributedJavaApplication(){
		return Math.random();
	}
	function pseudoDistributedPythonApplication(){
		return Math.random();
	}
	//supposed to be generic
    var javaButton = document.getElementById('javaServiceContainer');
	javaButton.onclick = function() {
	// here the java application is supposed to be called via HTTP, following soon
		/*const Http = new XMLHttpRequest();
		const url = 'http//localhost:16000/java-service/nextNr';
		Http.open("GET", url);
		Http.send();
		Http.onreadystatechange=(e)=>{
			javaButton.getElementsByTagName("result")[0].innerText=Http.responseText;	
		} */
		javaButton.getElementsByTagName("result")[0].innerText=pseudoDistributedJavaApplication();
	}

	var pythonButton = document.getElementById('pythonServiceContainer');
	pythonButton.onclick = function() {
		// here the python application is supposed to be called via HTTP, following soon
		/*const Http = new XMLHttpRequest();
		const url = 'http//localhost:16001/python-service/nextNr';
		Http.open("GET", url);
		Http.send();
		Http.onreadystatechange=(e)=>{
			javaButton.getElementsByTagName("result")[0].innerText=Http.responseText;	
		} */
	
	pythonButton.getElementsByTagName("result")[0].innerText=pseudoDistributedPythonApplication(); 
	}
