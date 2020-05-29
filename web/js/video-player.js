			//Video player variables
			var $videoPlayer = document.getElementById("video-player");
			var $vid = document.getElementById("video");
			var playerOn = false;
			var $smokeScreen = document.getElementById("smoke-screen");
			var screenOn = false;
			//Subtitle variables
			var subtitles = [];
			var $subtitles = document.getElementById("subtitles");
			var $toggle = document.getElementById("toggle");
			var lastSubtitle = 0;
			var currentSubtitle = 0;
			var subtitlesOn = false;
			//Soundtrack
			var $soundtrack = document.getElementById("soundtrack");

			//Shows and hides the video player
			function showPlayer(source,_subtitles){
				subtitles = _subtitles;
				$vid.setAttribute("src", source);
				$soundtrack.pause();
				lastSubtitle = 0;
				currentSubtitle = 0;
				toggleSubtitles();
				setTimeout(toggleVideo, 2000);
				$smokeScreen.style.opacity = .7;
				screenOn = true;
			}
			//Shows and hides the video player
			function hidePlayer(){
				hideVideo();
				$smokeScreen.style.opacity = 0;
				screenOn = false;
				$soundtrack.play();
				disableClick = false;
			}

			function toggleVideo(){
				$vid.play();
				$videoPlayer.style.display = "block";
				playerOn = true;
			}

			function hideVideo(){
				$vid.pause();
				$vid.currentTime = 0;
				$videoPlayer.style.display = "none";
				playerOn = false;
			}

			//This function takes the timecode of the video and determines what the most recent subtitle is. If it detects that the subtitle has changed, it changes the inner HTML of the #subtitles div
			var printSubtitles = function(){
				for(var i=0; i<subtitles.length; i++){
					if(subtitles[i].time < $vid.currentTime){
						currentSubtitle = i;
					}
				}
				if(currentSubtitle>lastSubtitle && subtitlesOn == true){
					$subtitles.innerHTML = subtitles[currentSubtitle].text;
					lastSubtitle = currentSubtitle;
				}
			}
			//This function turns the subtitles on and off
			var timer;
			function toggleSubtitles(){
				if(subtitlesOn == false){
					timer = setInterval(printSubtitles, 500);
					$toggle.innerHTML = "CC On";
					subtitlesOn = true;
				}else{
					clearInterval(timer);
					$subtitles.innerHTML = "";
					$toggle.innerHTML = "CC Off";
					subtitlesOn = false;
				}
			}
			//Hides the video player after the video is completed.
			$vid.addEventListener('ended',myHandler,false);
		    function myHandler(e) {
		        hidePlayer();
		    }