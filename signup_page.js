let form = document.querySelector("form")



form.addEventListener('submit', function () {
    event.preventDefault();

    let name = document.querySelector("#name");
    let company = document.querySelector("#company");
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let obj = {
        name : name.value,
        company : company.value,
        email : email.value,
        password : password.value
    }

    
   
    localStorage.setItem("UserData",JSON.stringify(obj))
    // alert('Sign up done!')
    window.open("login_page.html")
})

// let sub_btn = document.querySelector('#sub-btn')
// sub_btn.addEventListener('click',function(){
//     alert("done")
// })