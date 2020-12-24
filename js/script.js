var hotelName = prompt('Introduzca el nombre del hotel (hotel1 u hotel2)');
var hotelSite = 'Madrid';
var hotelPunctuation = prompt('Dele una puntuación de entre 1 y 5 puntos');
var hotelReview = confirm('¿Desea que su reseña sea anónima?');

document.getElementById('hotelName').innerHTML = `Hotel ${hotelName}`;
document.getElementById('hotelUbication').innerHTML = `Ubicación: ${hotelSite}`;
document.getElementById('hotelPhoto').src = `./img/${hotelName}.png`;
document.getElementById('punctuation').innerHTML = `${hotelPunctuation} estrellas`;
document.getElementById('hotelReview').checked = hotelReview;