var $videoPlayerContainer = document.getElementById("video-player-container");

showYouTubePlayer = function (videoIdentifier) {
    $videoPlayerContainer.style.display = "block"
    stopAudio()
    player.loadVideoById(videoIdentifier)
    pauseInteractionWithScene(true)
}

hideYouTubePlayer = function () {
    $videoPlayerContainer.style.display = "none"
    startAudio()
    player.stopVideo()
    pauseInteractionWithScene(false)
}