/**
 *  this program has a function which takes a parameter as inte
 */

 function checkEvenOdd(num){
     let result;  //string to return either Even or Odd

    if (num%2==0) {
        result = "Even";
    } else{
        result = "odd";
    }

    return result;

    /**********************************************************************************************************************************
     * the other way to do is using ternary operator. which works as well as the above if else statement.                             *
     *                                                                                                                                *
     * return num % 2 === 0? "Even" : "Odd"                                                                                           *
     **********************************************************************************************************************************/
     
 }


 //invoke
 console.log(checkEvenOdd(5))