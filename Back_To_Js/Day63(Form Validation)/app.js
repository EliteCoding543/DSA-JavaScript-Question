const submitBtn = document.getElementById("btn");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPass = document.getElementById("password");
const userAge = document.getElementById("age");
const form = document.getElementById("form");

const nameMsg = document.getElementById("Nmsg");
const eMsg = document.getElementById("emsg");
const pwMsg = document.getElementById("pwmsg");
const ageMsg = document.getElementById("agemsg");


submitBtn.addEventListener("click", () => {
   let userNameValue = userName.value
   let passwordValue = userPass.value
   let userEmailValue = userEmail.value;
   let userAgeValue = userAge.value

   if(userNameValue.length < 4 || userAgeValue.length > 8){
      nameMsg.style.display = "block"
   }

   if(userAgeValue < 18){
     ageMsg.style.display = "block"
   }


})


