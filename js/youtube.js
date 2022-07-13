function hideVideoPlayer(element) {
    player.stopVideo();
    element.classList.add("hidden");
}

function showVideoPlayer(videoID) {
    const element = document.getElementById('videoPlayerContainer');
    element.classList.remove("hidden");
    player.mute();
    player.loadVideoById(videoID);
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '480',
        width: '854',
    });
}
