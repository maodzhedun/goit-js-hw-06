function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputCtrl = document.getElementById("controls");
const inputEl = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const collection = document.getElementById("boxes");


createBtn.addEventListener("click", onClickCreate);
  
function onClickCreate(event) {
  createBoxes(inputEl.value);
}

destroyBtn.addEventListener("click", onClickDestroy);

function onClickDestroy(event) {
  collection.innerHTML = "";
  inputEl.value = "";
}



function createBoxes(amount) {
  const result = [];
  let sideBox = 30;
  
  for (let i = 0; i < amount; i++ ) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${sideBox}px`;
    div.style.height = `${sideBox}px`;
    result.push(div);
    sideBox += 10;
  }
  collection.append(...result);
}