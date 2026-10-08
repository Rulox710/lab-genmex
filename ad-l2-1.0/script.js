function burgerAlert(string) {
  alert(string);
}

function burgerSecret(string) {
  console.log(string);
}

const BURGER_PICTURE = document.getElementById('burger-picture');
function setBurgerColor(color) {
  BURGER_PICTURE.style.color = color;
}

document.querySelectorAll('.list__span--rice').forEach(span => {
  console.log(span)
  span.addEventListener('pointerdown', () => setBurgerColor('red'));
  span.addEventListener('pointerup', () => setBurgerColor('black'));
});
