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
      userName.innerHTML = `${nameMsg}`
   }

   if(userAgeValue < 18){
     ageMsg.style.display = "block"
   }

   if(!userEmailValue.endsWith("@gmail.com")){
   }

   let isUc = false;
   let isLc = false;
   let isHasSc = false;
   let allowedChar = ["!", "@", "#", "$", "%", "&", "*", "_"];

   for(let item of passwordValue){
      if(item.toUpperCase() === item){
         isUc = true;
      }

      if(item.toLowerCase() === item){
         isLc = true
      }

      if(allowedChar.includes(item)){
         isHasSc = true
      }
   }

   if(!isLc || !isUc || !isHasSc || !item.length < 8){
       pwMsg.style.display = "block"
   }
})


