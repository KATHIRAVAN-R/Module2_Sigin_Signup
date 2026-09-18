function validateForm(){
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const phregex = /^\d{10}$/;
     const locationregex = /^[A-Za-z ]+$/;
     const passwordregex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

     var fullname = document.getElementById("fullname").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var location = document.getElementById("location").value;
     var password = document.getElementById("pwd").value;
     var confirmpassword = document.getElementById("cpwd").value;


var nerror = document.getElementById("name-error");
var emailerror = document.getElementById("email-error");
var phoneerror = document.getElementById("phone-error");
var locationerror = document.getElementById("location-error");
var passworderror = document.getElementById("password-error");
var confirmerror = document.getElementById("confirm-error");


nerror.textContent = "";
emailerror.textContent = "";
phoneerror.textContent = "";
locationerror.textContent = "";
passworderror.textContent = "";
confirmerror.textContent = "";

if(fullname == "" || fullname == null)
{
    nerror.textContent = "Enter The Name";
    return false;
}
if(email == "" || !emailregex.test(email))
{
    emailerror.textContent = "Enter a valid email";
    return false;
}
if(phone == "" || !phregex.test(phone))
{
    phoneerror.textContent = "Phone number must contain 10 digits";
    return false;
}
if(location == "" || !locationregex.test(location))
{
    locationerror.textContent = "Location should contain only alphabets";
    return false;
}

if(password == "" || !passwordregex.test(password))
{
    passworderror.textContent = "Password must contain at least 8 characters with letters and numbers";
    return false;
}
if(confirmpassword == "")
{
    confirmerror.textContent = "Enter The Password";
    return false;
}

if(password != confirmpassword)
{
    confirmerror.textContent = "Password and Confirm Password must be same";
    return false;
}


localStorage.setItem("fullname", fullname);
localStorage.setItem("email", email);
localStorage.setItem("phone", phone);
localStorage.setItem("location", location);
localStorage.setItem("password", password);

alert("Registration Successful!");
window.location.href = "signIn.html";

return false;
}

// function togglePassword()
// {
//     var password = document.getElementById("pwd");
//     if(password.type == "password")
//     {
//         password.type = "text";
//     }
//     else
//     {
//         password.type = "password";
//     }
// }

// function toggleConfirmPassword()
// {
//     var confirmpassword = document.getElementById("cpwd");
//     if(confirmpassword.type == "password")
//     {
//         confirmpassword.type = "text";
//     }
//     else
//     {
//         confirmpassword.type = "password";
//     }
// }

var c = document.getElementById("checkpwd");
var d = document.getElementById("checkcpwd");
var pwd = document.getElementById("pwd");
var cpwd = document.getElementById("cpwd");
c.addEventListener("click", function () { 
    if (c.checked) {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
});
d.addEventListener("click", function () { 
    if (d.checked) {
        cpwd.type = "text";
    } else {
        cpwd.type = "password";
    }
});



