const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

function addItems(list) {
  for(item of list) addItem(item);
}

function fetchColorsList() {
  fetch('https://reqres.in/api/unknown')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`¡Error HTTP! Status: ${response.status}`);
      }

      return response.json();
    }).then((data) => {
      localStorage.setItem('colorList', JSON.stringify(data['data']));
      addItems(data['data']);
    });
}

function loadColorsFromStorage() {
  const storedData = localStorage.getItem('colorList');
  if(storedData) {
    addItems(JSON.parse(storedData));
    return true;
  }
  return false;
}

function loadColors() {
  if(!loadColorsFromStorage()) fetchColorsList();
}

function cleanColors() {
  itemsContainer.innerHTML = '';
}
