// todo vísa í rétta hluti með import

// breytur til þess að halda utan um html element nodes
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let img; // mynd á forsíðu

let image; // object sem inniheldur núverandi mynd á forsíðu.

/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */
 


import getRandomImage from "./nasa-api";

	document.addEventListener('DOMContentLoaded', (event) => {
		getAllMedia();
	});

 
function getAllMedia() {
	getRandomImage().then(function(result) {
	const {copyright, date, explanation, hdurl, media_type, title, url} = result;
	getNewImage(url);
	getNewText(explanation);
	getNewTitle(title);
	})
	console.log(result);
}

function getNewImage(hdurl) {
	document.querySelector('.apod__image').setAttribute("src", hdurl);
	
}
function getNewText(explanation) {
	document.querySelector('.apod__text').innerHTML = explanation; 
}
function getNewTitle(title) {
	document.querySelector('.apod__title').innerHTML = title;
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {
	img = getAllMedia();
	console.log(img);
	window.localStorage.setItem();
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init(apod) {
	document.getElementById("new-image-button").addEventListener('click', getAllMedia);
	document.getElementById("save-image-button").addEventListener('click', saveCurrentImage);

}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {

}
