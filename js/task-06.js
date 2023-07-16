const checkInput = document.querySelector("#validation-input");
checkInput.addEventListener("blur", onInput);
const inData = Number(checkInput.dataset.length);


function onInput(event) {
    const userData = event.currentTarget.value.length;
    event.currentTarget.classList.remove("invalid", "valid");

    if (userData !== inData) {
        event.currentTarget.classList.add("invalid");
    }
    else {
        event.currentTarget.classList.add("valid");
    }
}