

// var Week = 2 ;

// switch(Week) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuseday");
//         break;
//     case 3:
//         console.log("Wedenseday");
//         break;
//     case 4:
//         console.log("Thusrday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Satarday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default :
//         console.log("Invalid Week");
                        
// }

// var marks = 60;

// switch (true) {

//     case(marks >= 90 && marks < 100) :
//          console.log("Grade A");
//          break

//     case(marks >= 80 && marks < 90) :
//          console.log("Grade B");
//          break 

//     case(marks >= 70 && marks < 80) :
//          console.log("Grade C");
//          break 

//     case(marks >= 60 && marks < 70) :
//          console.log("Grade D");
//          break

//      case(marks <= 0 || marks > 100) :
//            console.log("Invalid Marks");
//            break
            
//     default :
//             console.log("Fails");
                       
// }

// var a = 10;
// var b = 20;
// var operation = "+ ";

// switch(operation) {

//     case("+") :
//       console.log(a + b);
//     break

//     case("-") :
//       console.log(a - b);
//     break

//     case("*") :
//       console.log(a * b);
//     break

//     case("%") :
//       console.log(a % b);
//     break
    
//     case("/") :
//       console.log(Math.floor(a / b));
//     break
    
// }


var n = 0;

switch(true) {
    case n == 0:
        console.log("Zero");
        break
    case n < 0:
        switch(true) {
            case n % 2 == 0:
                console.log("-ve Even");
                break
            case n % 2 != 0:
                console.log("-ve Odd");
             
        }  
        break
        case n > 0:

        switch(true) {
            case n % 2 == 0:
                console.log("+ve Even");
                break
            case n % 2 != 0:
                console.log("+ve Odd");
             
        } 
        break
}