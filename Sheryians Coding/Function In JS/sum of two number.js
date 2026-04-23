function outer(){
   console.log("Start");

   function inner(){
      return "Hello";
   }

   return inner();
}

console.log(outer());