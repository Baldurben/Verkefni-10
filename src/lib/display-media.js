/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */


import getRandomImage from './nasa-api';

function getNewImage(hdurl) {
  document.querySelector('.apod__image').setAttribute('src', hdurl);
}
function getNewText(explanation) {
  document.querySelector('.apod__text').innerHTML = explanation;
}
function getNewTitle(title) {
  document.querySelector('.apod__title').innerHTML = title;
}

function getAllMedia() {
  getRandomImage().then((result) => {
    const {
      explanation, title, url,
    } = result;
    document.getElementById('save-image-button').disabled = false;
    getNewImage(url);
    getNewText(explanation);
    getNewTitle(title);
  });
}


/*
 * Vistar núverandi mynd í storage.
 */
if (window.localStorage.getItem('i') == null) { // til að counter resettist ekki
  window.localStorage.setItem('i', 0);
}
let i = window.localStorage.getItem('i');

function saveCurrentImage() {
  const favimg = document.querySelector('.apod__image').src;
  window.localStorage.setItem(`img${i}`, favimg);
  const favtitle = document.querySelector('.apod__title').innerHTML;
  window.localStorage.setItem(`title${i}`, favtitle);
  i += 1;
  window.localStorage.setItem('i', i);
  document.getElementById('save-image-button').disabled = true;
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init() {
  document.getElementById('new-image-button').addEventListener('click', getAllMedia);
  document.getElementById('save-image-button').addEventListener('click', saveCurrentImage);
  getAllMedia();
}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
function clear() {
  const x = document.getElementsByTagName('section')[0];
  while (x.firstChild) {
    x.removeChild(x.firstChild);
    window.localStorage.clear();
  }
}
export function loadFavourites() {
  document.getElementById('clear').addEventListener('click', clear);

  let x = 0;
  while (x < ((localStorage.length - 1) / 2)) {
    const div = document.createElement('div');
    const favimgs = document.createElement('img');
    favimgs.src = window.localStorage.getItem(`img${x}`);
    const favtitles = document.createElement('h1');
    favtitles.innerHTML = window.localStorage.getItem(`title${x}`);
    favtitles.setAttribute('class', 'apod__title');
    div.appendChild(favtitles);
    div.appendChild(favimgs);
    document.querySelector('.apod').appendChild(div);
    x += 1;
  }
}
