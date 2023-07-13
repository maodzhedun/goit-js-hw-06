const inputFontSize =  document.querySelector("#font-size-control");
const sizeSpan = document.querySelector("#text");

inputFontSize.addEventListener("input", changeRange);

function changeRange(event) { 
    sizeSpan.style.fontSize = event.currentTarget.value + "px"; 
}
