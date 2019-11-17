
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = '0kwL6vjgabGuvSfHm5BPI140IKknqvlAOrBg9NWz'; //Minn api key!!
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


function randomdate(min, max) {
	var month = Math.floor(Math.random() * 12) + 1 
	var numday = 0;
	var year = 2019;
	if(month == 4 || month == 6 || month == 9 || month == 11) {
		numday = 30;
    }
	else {
		numday = 31;
	}
	//min = Math.ceil(min);
   // max = Math.floor(max);
   // return Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(month);
	console.log(numday);
	return year + "-" + month + "-" + numday
}

function getapi() {
	

}


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
	let API_URL = URL + "?api_key=" + API_KEY + "&date=" + randomdate();
	console.log(API_URL);
	fetch(API_URL)
	.then(results => {
		if(!results.ok) {
			throw new Error("Non 200 status");
		}
	return results.json();
	})
	.then(data => {
		console.log(data);
	})
}


document.addEventListener('DOMContentLoaded', (event) => {
    getRandomImage();
});
document.getElementById("new-image-button").addEventListener('click', getRandomImage);