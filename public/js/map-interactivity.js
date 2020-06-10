var $banner1 = document.getElementById("banner-1");
var $banner2 = document.getElementById("banner-2");
var $banner3 = document.getElementById("banner-3");
var $banner4 = document.getElementById("banner-4");
var $piece1 = document.getElementById("piece-1");
var $piece2 = document.getElementById("piece-2");
var $piece3 = document.getElementById("piece-3");
var $piece4 = document.getElementById("piece-4");
var $dashboard = document.getElementById("dashboard");
var $paragraphContainer = document.getElementById("paragraph-container");
var $historyContainer = document.getElementById("history-container");
var $hhfContainer = document.getElementById("hhf-container");
var $donateContainer = document.getElementById("donate-container");
var $focusContainer = document.getElementById("focus");
var $contributionContainer = document.getElementById("contribution");
var $billingContainer = document.getElementById("billing");
var $smokeScreen = document.getElementById("smoke-screen");


if(localStorage.getItem("mapIntro") == "played"){
	$smokeScreen.style.opacity = "0";
	$dashboard.style.opacity = "1";
	lon=160;
}
if(localStorage.getItem("mapIntro") == "waiting"){
	showOverlay($paragraphContainer);
	localStorage.setItem("mapIntro", "played");
}


if(localStorage.getItem("mobileclinicLocation") == "visited"){
	scene.children[2].material = scene.children[2].hover;
	scene.children[2].material.needsUpdate = true;
	if(localStorage.getItem("piece1") == "set"){
		$piece1.style.transition = "none";
		$piece1.style.display = "block";
		$piece1.style.opacity = "1";
	}
	if(localStorage.getItem("animation1") == "waiting"){
		console.log('WTF. I DID IT')
		showOverlay($banner1);
		localStorage.setItem("animation1", "played");
	}
}
if(localStorage.getItem("housesLocation") == "visited"){
	scene.children[1].material = scene.children[1].hover;
	scene.children[1].material.needsUpdate = true;
	if(localStorage.getItem("piece2") == "set"){
		$piece2.style.transition = "none";
		$piece2.style.display = "block";
		$piece2.style.opacity = "1";
	}
	if(localStorage.getItem("animation2") == "waiting"){
		showOverlay($banner2);
		localStorage.setItem("animation2", "played");
	}
}
if(localStorage.getItem("goatsLocation") == "visited"){
	scene.children[3].material = scene.children[3].hover;
	scene.children[3].material.needsUpdate = true;
	if(localStorage.getItem("piece3") == "set"){
		$piece3.style.transition = "none";
		$piece3.style.display = "block";
		$piece3.style.opacity = "1";
	}
	if(localStorage.getItem("animation3") == "waiting"){
		showOverlay($banner3);
		localStorage.setItem("animation3", "played");
	}
}
if(localStorage.getItem("clinicLocation") == "visited"){
	scene.children[4].material = scene.children[4].hover;
	scene.children[4].material.needsUpdate = true;
	if(localStorage.getItem("piece4") == "set"){
		$piece4.style.transition = "none";
		$piece4.style.display = "block";
		$piece4.style.opacity = "1";
	}
	if(localStorage.getItem("animation4") == "waiting"){
		showOverlay($banner4);
		localStorage.setItem("animation4", "played");
	}
}

function hide1(){
	if(localStorage.getItem("piece1") == "waiting"){
		$piece1.style.display = "block";
		setTimeout(function(){fillPiece($piece1);}, 1000);
		localStorage.setItem("piece1", "set");
		checkCompletion();
	}
	hideOverlay($banner1);
}
function hide2(){
	if(localStorage.getItem("piece2") == "waiting"){
		$piece2.style.display = "block";
		setTimeout(function(){fillPiece($piece2);}, 1000);
		localStorage.setItem("piece2", "set");
		checkCompletion();
	}
	hideOverlay($banner2);
}
function hide3(){
	if(localStorage.getItem("piece3") == "waiting"){
		$piece3.style.display = "block";
		setTimeout(function(){fillPiece($piece3);}, 1000);
		localStorage.setItem("piece3", "set");
		checkCompletion();
	}
	hideOverlay($banner3);
}
function hide4(){
	if(localStorage.getItem("piece4") == "waiting"){
		$piece4.style.display = "block";
		setTimeout(function(){fillPiece($piece4);}, 1000);
		localStorage.setItem("piece4", "set");
		checkCompletion();
	}
	hideOverlay($banner4);
}


function showOverlay(overlay){
	disableClick = true;
	$dashboard.style.opacity = "0";
	overlay.style.display = "block";
	$smokeScreen.style.opacity = ".5";
}
function hideOverlay(overlay){
	disableClick = false;
	$smokeScreen.style.opacity = "0";
	overlay.style.display = "none";
	$dashboard.style.display = "block";
	$dashboard.style.opacity = "1";
}
function fillPiece(piece){
	piece.style.opacity = "1";
}

function checkCompletion(){
	if(localStorage.getItem("piece1") == "set" && localStorage.getItem("piece2") == "set" && localStorage.getItem("piece3") == "set" && localStorage.getItem("piece4") == "set"){
		setTimeout(function(){showOverlay($donateContainer);}, 4000);
	}
}