 const textInput = document.querySelector('#name-input');
console.dir(textInput);
const textOutput = document.querySelector('#name-output');
console.log(textOutput);

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;
});
