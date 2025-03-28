const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error-message");

form.addEventListener('submit', (e) => {
    let messages = [];

    if(password.value.length <= 4) {
        messages.push("Password must be longer than 4 characters.")
    } else if (password.value.length > 12) {
        messages.push("Password must be shorter than 12 characters.")
    } else if (password.value === "password") {
        messages.push("Password can't be 'password'.")
    }

    // prevent submit if there's an error
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ');
    }
})