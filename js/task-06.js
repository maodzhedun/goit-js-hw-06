const checkInput = document.querySelector("#validation-input");
checkInput.addEventListener("blur", onInput);
const inData = Number(checkInput.dataset.length);


function onInput(event) {
    const userData = event.currentTarget.value.length;
   
    if (userData !== inData) {
        event.currentTarget.classList.add("invalid");
    }
    if (userData === inData) {
        event.currentTarget.classList.replace("invalid", "valid");
    }
}