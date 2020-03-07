/// click login button
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="none";

})


//////click create account button
const createAccountBtn = document.getElementById("create-account-btn");
createAccountBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="none";
    const signupArea = document.getElementById("sign-up-form");
    signupArea.style.display="block";
})

////click already have an account
const alreadyAccount = document.getElementById("already-account-btn");
alreadyAccount.addEventListener("click",function(){
    const signupArea = document.getElementById("sign-up-form");
    signupArea.style.display="none";
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="block";
})


