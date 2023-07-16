 const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener("input", onData)

function onData (event) {
    if (event.currentTarget.value.trim() === "") {
        textOutput.textContent  = "Anonymous";
    } else {
        textOutput.textContent = event.currentTarget.value;
    }
}

