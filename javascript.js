var signin = document.getElementById("login");
var signup = document.getElementById("register");
var button = document.getElementById("btn")

function register(){
    signin.style.left = "-400px";
    signup.style.left = "50px";
    button.style.left = "110px";
}
function login(){
    signin.style.left = "50px";
    signup.style.left = "400px";
    button.style.left = "110px";
}