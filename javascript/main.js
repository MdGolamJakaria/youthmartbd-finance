const createAccountBtn = document.getElementById("create-account-btn");
createAccountBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="none";
    const signupArea = document.getElementById("sign-up-form");
    signupArea.style.display="block";
})


const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-section");
    loginArea.style.display="none";

})
