document.getElementsByTagName('h1')[0].textContent = 'Adiós';


document.getElementById('red').style.color = 'orange';

let index = 0;
const colors = ['cyan', 'purple', 'brown', 'yellow', 'gray', 'lime', 'pink'];
document.getElementsByClassName('blue')[0].addEventListener("click", () => {
  document.getElementsByClassName('blue')[0].style.color = colors[(index++) % colors.length];
});
