let UserVal = prompt("Enter The Number");
for(let i = 1; i <= UserVal; i++)
{
    if(i % 2 === 0){
    console.log(`${i} is Even`);
}

else {
    console.log(`${i} is Odd `);
}
}