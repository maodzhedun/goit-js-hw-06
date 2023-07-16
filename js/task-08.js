const formUser = document.querySelector(".login-form");

formUser.addEventListener("submit", dataSubmit);

function dataSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value.trim() === "" || password.value.trim() === "") {
      return  alert("Please enter email and password.");
    } 
        const inputEmailPassword = {
            email: email.value,
            password: password.value,
        
        }
        console.log(inputEmailPassword);
     event.currentTarget.reset();
}
