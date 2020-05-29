	var $vid = document.getElementById("vid");
	window.addEventListener( 'resize', onWindowResize, false );
	function onWindowResize(event) {
		resizeVideo();
	}
	function resizeVideo(){
		if((window.innerWidth/window.innerHeight) > 1.77777){
			$vid.style.width = "100%";
			$vid.style.height = "auto";
		}
		if((window.innerWidth/window.innerHeight) < 1.77777){
			$vid.style.width = "auto";
			$vid.style.height = "100%";
		}
	}
	resizeVideo();