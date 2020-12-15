const form = document.getElementById("form");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid) {
        message.textContent = "Please fill out all fields!!!";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    // Check to see if passwords match
    if(password.value === password2.value) {
        passwordsMatch = true;
        password.style.borderColor = "lightgreen";
        password2.style.borderColor = "lightgreen";
    }else {
        passwordsMatch = false;
        message.textContent = "Make sure the passwords match!!!";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password.style.borderColor = "red";
        password2.style.borderColor = "red";
        return;
    }
    // If Form is valid and passwords match
    if(isValid && passwordsMatch) {
        message.textContent = "Succesfully Registered!";
        message.style.color = "lightgreen";
        messageContainer.style.borderColor = "lightgreen";
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // Do something with user data, like send it to the server
    console.log("user:",user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if Valid
    if(isValid && passwordsMatch){
        storeFormData();
    }
}

// Event Listeneer
form.addEventListener("submit", processFormData);