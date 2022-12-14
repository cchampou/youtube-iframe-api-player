console.log('Script started');

function onPlayerReady(event: any) {
  console.log('Player ready', event);
}

function onPlayerStateChange(event: any) {
  console.log('Player state change', event);
}

function onYouTubeIframeAPIReady() {
  console.log('YouTube API ready');
  const player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '21X5lGlDOfg',
    playerVars: {
      playsinline: 1,
      controls: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

function loadSdk() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
}

loadSdk();
