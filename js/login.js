function loginForm()
{
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var loginemail = document.getElementById("loginemail").value.trim();
    var loginpassword = document.getElementById("loginpwd").value.trim();

    var emailerror = document.getElementById("login-email-error");
    var passworderror = document.getElementById("login-password-error");

    emailerror.textContent = "";
    passworderror.textContent = "";

   if(loginemail == "" || !emailregex.test(loginemail))
{
    emailerror.textContent = "Enter a valid email";
    return false;
}

if(loginpassword == "")
{
    passworderror.textContent = "Password cannot be blank";
    return false;
}
var savedEmail = localStorage.getItem("email");
var savedPassword = localStorage.getItem("password");
if(loginemail == savedEmail && loginpassword == savedPassword)
{

    alert("Login Successful!");
    window.location.href = "module1/index.html";
    return false;
}
else
{
    passworderror.textContent = "Invalid Email or Password";
    return false;
}
}

// function toggleLoginPassword()
// {
//     var password = document.getElementById("loginpwd");
//     if(password.type == "password")
//     {
//         password.type = "text";
//     }
//     else
//     {
//         password.type = "password";
//     }
// }

var c = document.getElementById("loginpwd");
var ch = document.getElementById("checkpwd");
ch.addEventListener("click", function () { 
    if (ch.checked) {
        c.type = "text";
    } else {
        c.type = "password";
    }
});