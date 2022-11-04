const audio = new Audio();
const tracksCard = document.getElementsByClassName('track');
const player = document.querySelector('.player');
const pauseBtn = document.querySelector('.player__controller-pause');
const stopBtn = document.querySelector('.player__controller-stop')

const pausePlayer = () => {
    const trackActive = document.querySelector('.track_active')

    if (audio.paused) {
        audio.play();
        pauseBtn.classList.remove('player__icon_play');
        trackActive.classList.remove('track_pause');
    } else {
        audio.pause();
        pauseBtn.classList.add('player__icon_play');
        trackActive.classList.add('track_pause');
    }
}

const playMusic = (event) => {
    const trackActive = event.currentTarget;
    
    if(trackActive.classList.contains('track_active')) {
        pausePlayer();
        return
    } else {}
    audio.src = trackActive.dataset.track;
    audio.play();
    pauseBtn.classList.remove('player__icon_play');
    player.classList.add('player_active');

    for (let i = 0; i < tracksCard.length; i++) {
        tracksCard[i].classList.remove('track_active');
    }

    trackActive.classList.add('track_active');
};

for (let i = 0; i < tracksCard.length; i++) {
    tracksCard[i].addEventListener('click', playMusic);
}
pauseBtn.addEventListener('click', pausePlayer);

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.src = '';
    console.log('audio.src: ', audio.src);
    player.classList.remove('player_active');
    for (let i = 0; i < tracksCard.length; i++) {
        tracksCard[i].classList.remove('track_active');
    };
})

