
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = '0kwL6vjgabGuvSfHm5BPI140IKknqvlAOrBg9NWz'; //Minn api key!!
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


function randomdate(min, max) {
	var d = new Date();
	var dd = d.getDate();
	var mm = d.getMonth(); 
	var yyyy = d.getFullYear();
	var ceiling = new Date(yyyy, mm, dd);
	var floor = new Date(1995, 0o5, 16);
	var rnddate = new Date(+floor + Math.random() * (+ceiling - +floor));
	
	var month = rnddate.getMonth()+1;

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
    const results = await data.json();
	return (results);
}


document.addEventListener('DOMContentLoaded', (event) => {
    getRandomImage();
});
	