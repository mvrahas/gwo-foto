var $soundtrack = document.getElementById("soundtrack");

$soundtrack.setAttribute('src', audioPath)

const startAudio = function () {
    $soundtrack.play();
}

const stopAudio = function () {
    $soundtrack.pause();
}