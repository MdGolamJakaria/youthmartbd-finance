/// click login button
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="none";

});


//////click create account button
const createAccountBtn = document.getElementById("create-account-btn");
createAccountBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="none";
    const signupArea = document.getElementById("sign-up-form");
    signupArea.style.display="block";
});

////click already have an account
const alreadyAccount = document.getElementById("already-account-btn");
alreadyAccount.addEventListener("click",function(){
    const signupArea = document.getElementById("sign-up-form");
    signupArea.style.display="none";
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="block";
});

/////click login
const logInBtn = document.getElementById("loginBtn");
logInBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";

    const pageTopMarginRemove= document.getElementById("login-page");

    const mainArea1 = document.getElementById("main-area-1");
    mainArea1.style.display = "block";
    pageTopMarginRemove.style.marginTop = "0px";
});

