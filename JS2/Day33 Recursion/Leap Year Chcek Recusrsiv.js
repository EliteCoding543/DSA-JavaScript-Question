function checkLeapYear(year, endyear){
    if(year > endyear) return

    // condition check 
    if((year % 4 == 0  && year % 100 != 0) || (year % 400 == 0)){
        console.log(year, "is Leap Year")
    }

    else {
        console.log(year, "Is Not Leap Year")
    }

  return checkLeapYear( year + 1, endyear)
}

checkLeapYear(2012, 2020)