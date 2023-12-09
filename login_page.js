let signup_btn = document.querySelector('#sign-up');

signup_btn.addEventListener("click", function () {
    window.open("./signup_page.html")
})

let form = document.querySelector('form')
let email = document.querySelector('#email');
let password = document.querySelector('#password');


form.addEventListener('submit', function () {
    event.preventDefault();
    let UserData = {
        email : email.value,
        password : password.value
    }
    

    let SavedData = JSON.parse(localStorage.getItem("UserData"))
    
    if (UserData.email === SavedData.email && UserData.password === SavedData.password) {
        alert("Login Success!");
        window.open("./index.html")
    }
    else {
        alert("login Failed!");
    }
})

