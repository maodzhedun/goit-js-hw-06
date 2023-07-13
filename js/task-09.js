const changeBtn = document.querySelector(".change-color");
const valueHex = document.querySelector(".color");
const bodyEl = document.querySelector("body");

changeBtn.addEventListener("click", btnClick);

function btnClick(event) { 
  bodyEl.style.backgroundColor = getRandomHexColor();
  valueHex.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

