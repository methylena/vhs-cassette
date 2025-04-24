// Замените на свой трек, если хотите
const vaporSong = 'assets/vaporwave.mp3';

// Музыка
const music = new Howl({ src: [vaporSong] });

// Клик по кассете
const label = document.querySelector('.label');
label.addEventListener('click', () => music.play());
