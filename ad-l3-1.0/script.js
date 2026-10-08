const PALLETE = ['green', 'blue', 'red'];

/**
 * Función que recibe un elemento del html y cambia su propiedad color
 * a una aleatoria en la paleta de colores.
 *
 * @param {HTMLHeadingElement} htmlElement El elemento a cambiar de
 *        color.
 */
function changeColor(htmlElement) {
  let index = Math.floor(Math.random() * PALLETE.length);
  htmlElement.style.color = PALLETE[index];
}

const H5Elements = document.getElementsByTagName('h5');
for(const H5 of H5Elements) {
  H5.addEventListener('click', () => {
    changeColor(H5);
  })
}
