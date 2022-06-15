import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

window.addEventListener('load', continueVideoFromLastPoint);

function continueVideoFromLastPoint() {
  const saveTimeOfVideoObj = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );

  const seconds = saveTimeOfVideoObj.seconds;

  if (seconds) {
    player
      .setCurrentTime(seconds)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            console.log('Время было меньше 0 или больше длительности видео');
            break;

          default:
            console.log('Произошла другая ошибка');
            break;
        }
      });
  }
}
