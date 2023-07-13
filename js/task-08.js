const formUser = document.querySelector(".login-form");

formUser.addEventListener("submit", dataSubmit);

function dataSubmit(event) {
    event.preventDefault();
    
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" && password.value === "") {
        alert("Please enter email and password.");
    } else {
        const inputEmailPassword = {
            email: email.value,
            password: password.value,
        };
        console.log(inputEmailPassword);
    }
     event.currentTarget.reset();
}
