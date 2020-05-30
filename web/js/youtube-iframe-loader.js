// Load the YouTube iFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create an instance of the iFrame with event listeners
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '585',
    width: '960',
    playerVars: {
        'autoplay': 0,
        'controls': 1, 
    },
    videoId: 'kYYOCqilECo',
    events: {
      'onReady': onPlayerReady,
      'onStateChange' : onPlayerStateChange
    }
  });
}

// Fires when the Youtube player has loaded to completion
function onPlayerReady(event) {
  console.log('Youtube player good to go')
}

// Fires every time the video changes states
function onPlayerStateChange(event) {
    if (event.data == 0) {
        hideYouTubePlayer()
    }
}