// Punto 1
SECTION = document.querySelector('#container');
if(SECTION) alert('selección de #container');

//Punto 2
if(SECTION.querySelectorAll('.second').length == 2) alert('selecciones de .second')

// Punto 3
if(!SECTION.querySelector('ol.third')) alert('selección de third');

// Punto 4
SECTION.innerHTML += `<p> ¡Hola! </p>`;

// Punto 5
const NEW_FOOTER = document.createElement('div');
NEW_FOOTER.classList.add('footer');
NEW_FOOTER.textContent = 'Nuevo footer';
NEW_FOOTER.style.backgroundColor = 'lime';
NEW_FOOTER.style.minHeight = '10px';
NEW_FOOTER.style.minWidth = '100%';

const BODY = document.querySelector('body')
BODY.appendChild(NEW_FOOTER);

// Punto 6
BODY.querySelector('.footer').remove();
if(BODY.querySelectorAll('.footer').length == 1) alert('Se eliminó el footer antigüo');

// Punto 7
const CUATRO = document.createElement('li');
// Punto 8
CUATRO.textContent = 'Cuatro';
// Punto 9
SECTION.querySelector('ul').appendChild(CUATRO);
