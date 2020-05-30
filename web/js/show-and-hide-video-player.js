var $videoPlayerContainer = document.getElementById("video-player-container");
var $soundtrack = document.getElementById("soundtrack");

showYouTubePlayer = function (videoIdentifier) {
    $videoPlayerContainer.style.display = "block"
    $soundtrack.pause();
    player.loadVideoById(videoIdentifier)
}

hideYouTubePlayer = function () {
    $videoPlayerContainer.style.display = "none"
    $soundtrack.play();
    player.stopVideo()
}