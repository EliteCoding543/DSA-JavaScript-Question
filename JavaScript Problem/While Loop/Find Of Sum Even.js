let num = 2457898;
let Count = 0;
let oddCount = 0;

while(num > 0){
    let lastDigit = num % 10;
    if(lastDigit % 2 === 0){
        Count++
    }
    else {
        oddCount++
    }
  num = Math.floor(num / 10)
}

console.log("Total Count of Even Number= ",Count)
console.log("Total Count of Odd Number= ",oddCount)