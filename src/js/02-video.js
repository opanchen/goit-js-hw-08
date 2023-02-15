import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function initTimeoutDate() {
  const storageData = localStorage.getItem('videoplayer-current-time');
  console.log(storageData);

  if (storageData) {
    const { seconds } = JSON.parse(storageData);
    console.log(seconds);
    player.setCurrentTime(seconds);
  }
}

initTimeoutDate();

player.on('play', function () {
  console.log('played the video!');
});

player.on('pause', function () {
  console.log('pause');
});

player.on('timeupdate', throttle(onTimeCount, 1000));

function onTimeCount(currentTime) {
  console.log(currentTime);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
}
