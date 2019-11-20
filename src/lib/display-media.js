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
 
document.getElementById("new-image-button").addEventListener('click', getNewImage);

import getRandomImage from "./nasa-api";

 
function getNewImage(e) {
	e.preventDefault();
	var img = document.createElement("img");
	var getter = getRandomImage().then(function(result) {
	const {copyright, date, explanation, hdurl, media_type, title, url} = result;
		img.crossOrigin = "anonymous";
		img.setAttribute("src", hdurl);
		console.log(hdurl);
		console.log(img);
	})
	document.body.appendChild(img);
	//console.log(getter);

	document.body.innerHTML = img;
	//console.log(getRandomImage());
	
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {

}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init(apod) {

}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {

}
