const createAccountBtn = document.getElementById("create-account-btn");
createAccountBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-form");
    loginArea.style.display = "none";
    const signupArea = document.getElementById("sign-up-form");
    signupArea.style.display="block";
})