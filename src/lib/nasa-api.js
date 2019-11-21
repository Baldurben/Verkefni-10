
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = '0kwL6vjgabGuvSfHm5BPI140IKknqvlAOrBg9NWz'; //Minn api key!!
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


function randomdate(min, max) {
	let d = new Date();
	let dd = d.getDate();
	let mm = d.getMonth(); 
	let yyyy = d.getFullYear();
	let ceiling = new Date(yyyy, mm, dd);
	let floor = new Date(1995, 0o5, 16);
	let rnddate = new Date(+floor + Math.random() * (+ceiling - +floor));
	let month = rnddate.getMonth()+1;

	return rnddate.getFullYear() + '-' + month + '-' + rnddate.getDate();
}



/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
	let API_URL = URL + "?api_key=" + API_KEY + "&date=" + randomdate();
	const data = await fetch(API_URL);
	return data.json();
}



	