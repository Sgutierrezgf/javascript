import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [
        new AutoPlay()
    ]
});

const playButton: HTMLMediaElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLMediaElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};
//
11543726